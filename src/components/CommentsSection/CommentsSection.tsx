import React from 'react'
import useEasyComments, { Params } from '../../hooks'
import Comment from '../Comment'

interface Props extends Params {
  options: object
}
/*
  commentId: string
  userId: string
  username: string
  comment: string
  creationDate?: string | Date
  likes?: number
  dislikes?: number
  avatarUrl?: string
  profileLink?: string
*/


const CommentsSection = (props: Props) => {
  const { comments, handleSubmit, handleUpdate } = useEasyComments({
    currentUser: props.currentUser,
    initialComments: props.initialComments,
    listeners: props.listeners
  })

  return (
    <section>
      <section>
        <p>{props.currentUser.name}</p>
        <form
          onSubmit={evt => {
            evt.preventDefault()
            const comment = document.getElementById(
              'input-add-comment'
            ) as HTMLInputElement
            return handleSubmit(comment.value ?? '')
          }}
        >
          <input id="input-add-comment" placeholder="Agregar comentario..." />
          <button type="submit">Send</button>
        </form>
      </section>
      <section>
        {comments.map(commen => (
          <Comment
            key={commen.commentId}
            commentar={commen}
            onUpdate={handleUpdate}
          />
        ))}
      </section>
    </section>
  )
}

export default CommentsSection
