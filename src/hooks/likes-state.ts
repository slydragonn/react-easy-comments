import { useEffect, useState } from 'react'
import { Params } from '../types'

const useLikes = ({
  commentId,
  likes,
  dislikes,
  currentUser,
  updateCommentLikes
}: Params) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [totalLikes, setLikes] = useState(likes)
  const [totalDislikes, setDislikes] = useState(dislikes)

  useEffect(() => {
    const userLiked = currentUser.likes.includes(commentId)
    const userDisliked = currentUser.dislikes.includes(commentId)

    if (userDisliked) {
      setDisliked(() => true)
    } else if (userLiked) {
      setLiked(() => true)
    }
  }, [])

  useEffect(() => {
    const commentInfo = {
      likes: totalLikes,
      dislikes: totalDislikes,
      currentUser: {
        likes:
          currentUser.likes.includes(commentId) && liked
            ? currentUser.likes
            : liked
            ? [...currentUser.likes, commentId]
            : currentUser.likes.filter(id => id !== commentId),
        dislikes:
          currentUser.dislikes.includes(commentId) && disliked
            ? currentUser.dislikes
            : disliked
            ? [...currentUser.dislikes, commentId]
            : currentUser.dislikes.filter(id => id !== commentId)
      }
    }
    updateCommentLikes(commentInfo)
  }, [totalLikes, totalDislikes])

  const handleLikes = (context: 'like' | 'dislike') => {
    if (context === 'like') {
      if (disliked) {
        setDisliked(dislike => !dislike)
        setDislikes(dislikes => dislikes - 1)
      }
      if (liked) {
        setLiked(like => !like)
        return setLikes(likes => likes - 1)
      }
      setLiked(like => !like)
      return setLikes(likes => likes + 1)
    }

    if (context === 'dislike') {
      if (liked) {
        setLiked(like => !like)
        setLikes(likes => likes - 1)
      }
      if (disliked) {
        setDisliked(dislike => !dislike)
        return setDislikes(dislikes => dislikes - 1)
      }
      setDisliked(dislike => !dislike)
      return setDislikes(dislikes => dislikes + 1)
    }
  }

  return {
    liked,
    disliked,
    totalLikes,
    totalDislikes,
    handleLikes
  }
}

export default useLikes
