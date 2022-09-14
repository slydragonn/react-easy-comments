import React from 'react'
import useEasyComments from '../../hooks'
import { CurrentUser, DefaultOptions, InitialComments, Listeners, Options } from '../../types'
import { OneComment } from '../Comment'
import CommentForm from '../CommentForm'
import { CommentsLayout, MainLayout } from '../Layouts'
import Avatar from '../User/Avatar'
import './main.scss'
import SortComments from './Sort'
import TotalComments from './Total'

export interface CommentsSectionProps {
  currentUser: CurrentUser
  initialComments: InitialComments
  listeners: Listeners
  options?: Options
}

export const defaultOptions: DefaultOptions = {
  placeholder: 'Add a comment...',
  theme: 'default',
  editable: true,
  erasable: true,
  likes: 'default',
  maxLength: 500,
  creationDate: true,
  profileImage: true,
  totalComments: true,
  filter: [true, 'date']
}

 /**
   * Create a complete comments Section
   * 
   * @param {CurrentUser} props.currentUser Accepts an object with the current user info.
   * @param {Array} props.initialComments It's an Array that accepts two elements. The first is the array
   * with the comments, and the second element is the function to map.
   * @param {Listeners} props.listeners It's an object with three properties and represents the different
   * actions of the comments section. (onSubmit - onUpdate - onDelete). The properties are functions that pass as param
   * an object with the comment info or in the onDelete case, it passes a comment id.
   * @param {Options} props.options It's an object with which you can personalize the comment section, all properties are optional.
   * 
   * @version   1.2.1
   * 
   * @author    Alejandro Londoño <alogo18m@gmail.com>
   * 
   * @see   https://github.com/slydragonn/react-easy-comments
   */
const CommentsSection = ({
  currentUser,
  initialComments,
  listeners,
  options
}: CommentsSectionProps) => {
  const {
    comments,
    userLikes,
    handleSubmit,
    handleUpdate,
    handleDelete,
    toggleSort
  } = useEasyComments({
    currentUser,
    initialComments,
    listeners,
    filter: options?.filter?.[1] ?? defaultOptions.filter[1]
  })

  return (
    <MainLayout>
      <section className="send">
        <Avatar
          name={currentUser.name}
          image={currentUser.avartarUrl}
          profileLink={currentUser.linkProfile}
          options={{
            profileImage: options?.profileImage ?? defaultOptions.profileImage
          }}
        />
        <CommentForm
          theme={options?.theme}
          initialValue=""
          onSend={handleSubmit}
          options={{
            placeholder: options?.placeholder ?? defaultOptions.placeholder,
            maxLength: options?.maxLength ?? defaultOptions.maxLength
          }}
        />
      </section>
      <section className="commentsInfo">
        {(options?.totalComments ?? defaultOptions.totalComments) && (
          <TotalComments theme={options?.theme} comments={comments} />
        )}
        {((options?.filter?.[0] ?? defaultOptions.filter[0]) && ((options?.likes ?? defaultOptions.likes) !== 'no-likes')) && (
          <SortComments theme={options?.theme} toggleSort={toggleSort} />
        )}
      </section>
      <CommentsLayout theme={options?.theme}>
        {comments.map(comment => (
          <OneComment
            key={comment.commentId}
            theme={options?.theme}
            comment={comment}
            user={userLikes}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            options={{
              creationDate: options?.creationDate ?? defaultOptions.creationDate,
              profileImage: options?.profileImage ?? defaultOptions.creationDate,
              editable: options?.editable ?? defaultOptions.editable,
              erasable: options?.erasable ?? defaultOptions.erasable,
              likes: options?.likes ?? defaultOptions.likes
            }}
          />
        ))}
      </CommentsLayout>
    </MainLayout>
  )
}

export default CommentsSection
