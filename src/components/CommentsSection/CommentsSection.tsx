import React from 'react'
import useEasyComments, { Params } from '../../hooks'
import Comment from '../Comment'

interface Props extends Params {
  options?: object
}

const defaultOptions = {
  placeholder: 'Add a comment...',
  theme: 'default',
  editable: true,
  erasable: false,
  likes: [true, true],
  maxLength: 500,
  profileImage: true,
  totalComments: true,
  filter: [true, 'date'],
  emojis: false
}

const CommentsSection = (props: Props) => {
  const { options = defaultOptions } = props
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
