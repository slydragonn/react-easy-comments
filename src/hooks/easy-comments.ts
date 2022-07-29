import { useState } from 'react'
import { v4 as uuid } from 'uuid'
export interface CurrentUser {
  id: string
  name: string
  avartarUrl?: string
  linkProfile?: string
}

export type InitialComments = Array<any>

export interface Listeners {
  onSubmit: (comment: CommentSubmit) => void
  onUpdate: (comment: Comment) => void
}

export interface Params {
  currentUser: CurrentUser
  initialComments: InitialComments
  listeners: Listeners
}

export interface Comment {
  commentId: string
  userId: string
  username: string
  comment: string
  creationDate?: string
  likes?: number
  dislikes?: number
  avatarUrl?: string
  profileLink?: string
}

export interface CommentSubmit {
  userId: string
  username: string
  comment: string
  avatarUrl?: string
  profileLink?: string
}

interface EasyComments {
  comments: Array<Comment>
  handleSubmit: (comment:string) => void
  handleUpdate: (comment: Comment) => void
}

const useEasyComments = ({initialComments, currentUser, listeners}: Params): EasyComments => {
  const [comments, setComments] = useState(initialComments[0].map(initialComments[1]))
  
  const { id } = currentUser
  const { onSubmit, onUpdate } = listeners

  const handleSubmit = async (commentValue:string) => {
    try {
      const comment = {
        userId: id,
        username: currentUser.name,
        comment: commentValue
      }
      await onSubmit(comment)
      const newComment = {
        ...comment,
        commentId: uuid()
      }
      const addComment = [...comments, newComment]
      setComments(() => addComment)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (comment: Comment) => {
    try {
      if(comment.userId === id){
        await onUpdate(comment)

        const deleteUpdatedComment = comments.filter((com:Comment) => com.commentId !== comment.commentId)
        const updatedComment = {
          ...comment
        }
        return setComments(() => [...deleteUpdatedComment, updatedComment])
      }
      
      const likedComment = comments.find((com:Comment) => com.commentId === comment.commentId)
      const updatedComment = {
        ...likedComment,
        likes: comment.likes,
        dislikes: comment.dislikes
      }
      
      await onUpdate(updatedComment)

      const deleteUpdatedComment = comments.filter((com:Comment) => com.commentId !== comment.commentId)
      return setComments(() => [...deleteUpdatedComment, updatedComment])

    } catch (error) {
      console.log(error)
    }
  }

  return {
    comments,
    handleSubmit,
    handleUpdate
  }
  
}

export default useEasyComments