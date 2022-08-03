import React, { useState } from "react"
import { Comment as CommentType } from '../../types'

interface Props {
  commentar: CommentType
  onUpdate: (comment: CommentType) => void
}

const Comment = ({ commentar, onUpdate }: Props) => {
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

export default Comment