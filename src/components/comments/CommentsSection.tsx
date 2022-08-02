import React, { useState } from 'react'
import useEasyComments, { Comment, Params } from '../../hooks/easy-comments'

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

interface CommentProps {
  commentar: Comment
  onUpdate: (comment: Comment) => void
}

const Commenta = ({ commentar, onUpdate }: CommentProps) => {
  const [like, setLikes] = useState(commentar.likes ?? 0)
  const [dislike, setDislike] = useState(commentar.dislikes ?? 0)
  return (
    <section>
      <div>
        <p>{commentar.username}</p>
        <span>{commentar.creationDate ?? ''}</span>
      </div>
      <div>
        <p>{commentar.comment}</p>
        <div>
          <div>
            <span>{commentar.likes}</span>
            <button
              onClick={() =>
                onUpdate({
                  ...commentar,
                  likes: like + 1
                })
              }
            >
              Like
            </button>
          </div>
          <div>
            <span>{commentar.dislikes}</span>
            <button
              onClick={() =>
                onUpdate({
                  ...commentar,
                  dislikes: dislike + 1
                })
              }
            >
              Dislike
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

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
          <Commenta
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
