import React from "react"
import useEasyComments, { Params } from "../../hooks/easy-comments"

interface Props extends Params {
  options: object
}

const CommentsSection = (props:Props) => {
  const { comments, handleSubmit, handleUpdate} = useEasyComments({
    currentUser: props.currentUser,
    initialComments: props.initialComments,
    listeners: props.listeners
  })

  return (
    <section>
      <section>
        <p>{props.currentUser.name}</p>
        <form onSubmit={() => handleSubmit(comments[0])}>
          <input  placeholder="Agregar comentario..."/>
          <button type="submit">Send</button>
        </form>
      </section>
      <section>
        {
          comments.map(comment => <p key={comment.commentId}>{comment.comment}<button onClick={() => handleUpdate(comment)}>click</button></p>)
        }
      </section>
    </section>
  )
}

export default CommentsSection