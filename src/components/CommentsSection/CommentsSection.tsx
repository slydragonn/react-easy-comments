import React from 'react'
import useEasyComments, { Params } from '../../hooks'
import { Options } from '../../types'
import { OneComment } from '../Comment'
import CommentForm from '../CommentForm'
import { CommentsLayout, MainLayout } from '../Layouts'
import Avatar from '../User/Avatar'
import './main.scss'

export interface Props extends Params {
  options?: Options
}

const defaultOptions: Options = {
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

const CommentsSection = ({
  initialComments,
  currentUser,
  listeners,
  options = defaultOptions
}: Props) => {
  const { comments, userLikes, handleSubmit, handleUpdate, handleDelete } =
    useEasyComments({
      currentUser,
      initialComments,
      listeners
    })
    
  return (
    <MainLayout>
      <section className="send">
        <Avatar
          name={currentUser.name}
          image={currentUser.avartarUrl}
          profileLink={currentUser.linkProfile}
        />
        <CommentForm
          theme={options.theme}
          initialValue=""
          onSend={handleSubmit}
        />
      </section>
      <CommentsLayout theme={options.theme}>
        {comments.map(comment => (
          <OneComment
            key={comment.commentId}
            theme={options.theme}
            comment={comment}
            user={userLikes}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </CommentsLayout>
    </MainLayout>
  )
}

export default CommentsSection
