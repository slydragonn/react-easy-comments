import React from "react"
import { useCommentsList } from '../../../hooks'
import { InitialComments, Options } from "../../../types"
import { CommentsItem } from '../../Comment'
import { CommentsLayout, MainLayout } from '../../Layouts'
import { defaultOptions } from '../CommentsSection'
import SortComments from '../Sort'
import TotalComments from '../Total'


export interface CommentsListProps {
  initialComments: InitialComments,
  options?: Options
}

const CommentsList = ({ initialComments, options }: CommentsListProps) => {

  const {comments, toggleSort} = useCommentsList({
    initialComments, 
    filter: options?.filter?.[1] ?? defaultOptions.filter[1]
  })

  return (
    <MainLayout>
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
          <CommentsItem
            key={comment.commentId}
            theme={options?.theme ?? defaultOptions.theme}
            comment={comment}
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

export default CommentsList