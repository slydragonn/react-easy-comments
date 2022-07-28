import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { Comment, Params } from "../types"

interface EasyComments {
  comments: Array<Comment>
  handleSubmit: (comment:Comment) => void
  handleUpdate: (comment: Comment) => void
}

const useEasyComments = ({initialComments, currentUser, listeners}: Params): EasyComments => {
  const { id } = currentUser
  const { onSubmit, onUpdate } = listeners

  const [comments, setComments] = useState(initialComments[0].map(initialComments[1]))

  const handleSubmit = async (comment:Comment) => {
    try {
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
      
      const likedComment = comments.filter((com:Comment) => com.commentId === comment.commentId)
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