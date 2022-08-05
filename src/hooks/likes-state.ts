import { useEffect, useState } from 'react'
import { Params } from '../types'

const useLikes = ({ likes, dislikes, currentUserId }: Params) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [totalLikes, setLikes] = useState(likes.total)
  const [totalDislikes, setDislikes] = useState(dislikes.total)

  useEffect(() => {
    const userLiked = likes.users.includes(currentUserId)
    const userDisliked = dislikes.users.includes(currentUserId)

    if (userDisliked) {
      setDisliked(() => true)
    } else if (userLiked) {
      setLiked(() => true)
    }
  }, [])

  const handleLikes = (context: string) => {
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
