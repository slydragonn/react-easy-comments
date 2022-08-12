import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import {
  CommentLikes, EasyComment, Theme,
  UserLikes
} from '../../types'
import LikesSection from '../LikesSection'
import Menu from '../Menu'
import User from '../User'
import './Comment.scss'
import Text from './Text'

export interface CommentProps {
  theme?: Theme
  user: UserLikes
  comment: EasyComment
  onUpdate: (comment: EasyComment, currentUser: UserLikes) => void
  onDelete: (commentId: string) => void
}

const Comment = ({
  theme = 'default',
  user,
  comment,
  onUpdate,
  onDelete
}: CommentProps) => {
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [editComment, setEditComment] = useState(false)
  const [commentValue, setCommentValue] = useState(comment.comment)

  useEffect(() => {
    user.id === comment.userId && setIsCurrentUser(() => true)
  }, [])

  const handleDelete = (commentId: string) => {
    return onDelete(commentId)
  }

  const handleToggleEdit = (context: string) => {
    if(context === 'cancel' && commentValue != comment.comment){
      setCommentValue(() => comment.comment)
    }
    return setEditComment(edit => !edit)
  }

  const handleChange = (comment: string) => {
    return setCommentValue(() => comment)
  }

  const handleEdited = () => {
    if (commentValue.length > 0) {
      setEditComment(() => false)
      const cleanValue = DOMPurify.sanitize(commentValue)

      const commentEdited = {
        ...comment,
        comment: cleanValue
      }
      return onUpdate(commentEdited, user)
    }
    setCommentValue(() => comment.comment)
    return setEditComment(() => false)
  }

  const handleLikes = (commentLikes: CommentLikes) => {
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
}

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
            onEdit={handleToggleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div className="comment__info">
        <Text
          theme={theme}
          edit={editComment}
          onEdited={handleEdited}
          onChange={handleChange}
        >
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
