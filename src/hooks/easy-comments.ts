import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  CurrentUser,
  EasyComment,
  EasyComments,
  Filter,
  InitialComments,
  Listeners,
  UserLikes
} from '../types'
import useSort from './sort'
export interface Params {
  currentUser: CurrentUser
  initialComments: InitialComments
  listeners: Listeners
  filter: Filter
}

const useEasyComments = ({
  initialComments,
  currentUser,
  listeners,
  filter
}: Params): EasyComments => {
  const [comments, setComments] = useState<EasyComment[]>(
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
    if (commentValue.length < 1) return
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
        const addedComment = [...comments, newComment]
        return setComments(() => addedComment)
      } catch (error) {
        console.log(error)
      }
    }
    return
  }

  const handleUpdate = async (comment: EasyComment, currentUser: UserLikes) => {
    try {
      if (comment.userId === currentUser.id) {
        await onUpdate(comment, currentUser)
        const updatedCommentIndex = comments.findIndex(
          el => el.commentId === comment.commentId
        )
        const commentsCopy = [...comments]
        const updateComment: EasyComment = {
          ...comment,
          creationDate:
            comment.comment !== commentsCopy[updatedCommentIndex].comment
              ? new Date().toString()
              : comment.creationDate
        }
        commentsCopy[updatedCommentIndex] = updateComment

        setComments(() => commentsCopy)
        return setUserLikes(() => currentUser)
      }

      const likedComment = comments.find(
        (com: EasyComment) => com.commentId === comment.commentId
      ) as EasyComment

      const updatedComment = {
        ...likedComment,
        likes: comment.likes,
        dislikes: comment.dislikes
      }

      await onUpdate(updatedComment, currentUser)

      const updatedCommentIndex = comments.findIndex(
        el => el.commentId === updatedComment.commentId
      )
      const commentsCopy = [...comments]
      commentsCopy[updatedCommentIndex] = updatedComment

      setComments(() => commentsCopy)
      return setUserLikes(() => currentUser)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id: string) => {
    if (currentUser) {
      try {
        const { userId } = comments.find(
          comment => comment.commentId === id
        ) as EasyComment

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

  const [toggleSort, sortedComments] = useSort({
    sortBy: filter,
    comments
  })

  return {
    comments: sortedComments,
    userLikes,
    handleSubmit,
    handleUpdate,
    handleDelete,
    toggleSort
  }
}

export interface CommentsListParams {
  initialComments: InitialComments
  filter: Filter
}

export const useCommentsList = ({initialComments, filter}: CommentsListParams) => {
  const [comments, setComments] = useState<EasyComment[]>([])

  useEffect(() => {
    setComments(() => initialComments[0].map(initialComments[1]))
  }, [])

  const [toggleSort, sortedComments] = useSort({
    sortBy: filter,
    comments
  })

  return {
    comments: sortedComments,
    toggleSort
  }

}

export default useEasyComments
