import DOMPurify from 'dompurify'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Comment as CommentType,
  CommentLikes,
  Theme,
  UserLikes
} from '../../types'
import LikesSection from '../LikesSection'
import Menu from '../Menu'
import User from '../User'
import './Comment.scss'
import Text from './Text'

export interface Props {
  theme?: Theme
  user: UserLikes
  comment: CommentType
  onUpdate: (comment: CommentType, currentUser: UserLikes) => void
  onDelete: (commentId: string) => void
}

const Comment = ({
  theme = 'default',
  user,
  comment,
  onUpdate,
  onDelete
}: Props) => {
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [editComment, setEditComment] = useState(false)
  const [commentValue, setCommentValue] = useState(comment.comment)

  useEffect(() => {
    user.id === comment.userId && setIsCurrentUser(() => true)
  }, [])

  const handleDelete = (commentId: string) => {
    return onDelete(commentId)
  }

  const handleEdit = () => {
    setCommentValue(() => comment.comment)
    return setEditComment((edit) => !edit)
  }

  const handleChange = (comment: string) => {
    return setCommentValue(() => comment)
  }

  const handleEdited = () => {
    if(commentValue.length > 0) {
      setEditComment(() => false)
      const cleanValue = DOMPurify.sanitize(commentValue)

      const commentEdited = {
        ...comment,
        comment: cleanValue
      }
      return onUpdate(commentEdited, user)
    }
    console.log('hello')
    setCommentValue(() => comment.comment)
    return setEditComment(() => false)
  }

  const handleLikes = useCallback(
    (commentLikes: CommentLikes) => {
      const updatedComment = {
        ...comment,
        likes: commentLikes.likes,
        dislikes: commentLikes.dislikes
      }

      const updatedUserLikes: UserLikes = {
        ...user,
        likes: commentLikes.currentUser.likes,
        dislikes: commentLikes.currentUser.dislikes
      }
      return onUpdate(updatedComment, updatedUserLikes)
    },
    [comment, user]
  )

  return (
    <section className="comment">
      <div className="comment__user">
        <User
          name={comment.username}
          theme={theme}
          profileLink={comment.profileLink}
          image={comment.avatarUrl}
          creationDate={comment.creationDate}
        />
        {isCurrentUser && (
          <Menu
            theme={theme}
            commentId={comment.commentId}
            edit={editComment}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div className="comment__info">
        <Text theme={theme} edit={editComment} onEdited={handleEdited} onChange={handleChange}>
          {commentValue}
        </Text>
        <LikesSection
          theme={theme}
          hide={editComment}
          commentId={comment.commentId}
          currentUser={user}
          likes={comment.likes ?? 0}
          dislikes={comment.dislikes ?? 0}
          updateCommentLikes={handleLikes}
        />
      </div>
    </section>
  )
}

export default Comment
