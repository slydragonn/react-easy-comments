import { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  Comment,
  CurrentUser,
  EasyComments,
  InitialComments,
  Listeners,
  UserLikes
} from '../types'
export interface Params {
  currentUser: CurrentUser
  initialComments: InitialComments
  listeners: Listeners
}

const useEasyComments = ({
  initialComments,
  currentUser,
  listeners
}: Params): EasyComments => {
  const [comments, setComments] = useState<Comment[]>(
    initialComments[0].map(initialComments[1])
  )

  const currentUserLikes = {
    id: currentUser?.id ?? '',
    likes: currentUser?.likes ?? [],
    dislikes: currentUser?.dislikes ?? []
  }

  const [userLikes, setUserLikes] = useState<UserLikes>(currentUserLikes)

  const { onSubmit, onUpdate, onDelete } = listeners

  const handleSubmit = async (commentValue: string) => {
    if (currentUser) {
      try {
        const comment = {
          userId: currentUser.id,
          username: currentUser.name,
          comment: commentValue,
          avatarUrl: currentUser?.avartarUrl,
          profileLink: currentUser?.linkProfile,
          creationDate: String(new Date())
        }
        await onSubmit(comment)
        const newComment = {
          ...comment,
          commentId: uuid()
        }
        const addComment = [...comments, newComment]
        return setComments(() => addComment)
      } catch (error) {
        console.log(error)
      }
    }
    return
  }

  const handleUpdate = useCallback(
    async (comment: Comment, currentUser: UserLikes) => {
      try {
        if (comment.userId === currentUser.id) {
          await onUpdate(comment, currentUser)

          const deleteUpdatedComment = comments.filter(
            (com: Comment) => com.commentId !== comment.commentId
          )

          const updatedComment = comment

          setComments(() => [...deleteUpdatedComment, updatedComment])
          return setUserLikes(() => currentUser)
        }

        const likedComment = comments.find(
          (com: Comment) => com.commentId === comment.commentId
        ) as Comment

        const updatedComment = {
          ...likedComment,
          likes: comment.likes,
          dislikes: comment.dislikes
        }

        await onUpdate(updatedComment, currentUser)

        const deleteUpdatedComment = comments.filter(
          (com: Comment) => com.commentId !== comment.commentId
        )

        setComments(() => [...deleteUpdatedComment, updatedComment])
        return setUserLikes(() => currentUser)
      } catch (error) {
        console.log(error)
      }
    },
    [comments]
  )

  const handleDelete = async (id: string) => {
    if (currentUser) {
      try {
        const { userId } = comments.find(
          comment => comment.commentId === id
        ) as Comment

        if (currentUser.id === userId) {
          await onDelete(id)

          const deleteComment = comments.filter(
            comment => comment.commentId !== id
          )
          setComments(() => deleteComment)

          const deleteLikedComment = userLikes.likes.filter(
            commentId => commentId !== id
          )
          const deleteDisLikedComment = userLikes.dislikes.filter(
            commentId => commentId !== id
          )
          return setUserLikes(user => ({
            ...user,
            likes: deleteLikedComment,
            dislikes: deleteDisLikedComment
          }))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return {
    comments,
    userLikes,
    handleSubmit,
    handleUpdate,
    handleDelete
  }
}

export default useEasyComments
