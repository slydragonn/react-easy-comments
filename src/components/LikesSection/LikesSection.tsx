//import { useEffect } from "@storybook/addons"
import addClass from 'classnames'
import React from 'react'
import {
  AiFillDislike as DislikeIcon,
  AiFillLike as LikeIcon
} from 'react-icons/ai'
import { useLikes } from '../../hooks'
import { CommentLikes, Params } from '../../types'
import { subNumber } from '../../utils'
import './Likes.scss'

export interface Props extends Params {
  updateCommentLikes: (commentLikes: CommentLikes) => void
}

const LikesSection = (props: Props) => {
  const { totalLikes, totalDislikes, liked, disliked, handleLikes } = useLikes({
    likes: props.likes,
    dislikes: props.dislikes,
    currentUserId: props.currentUserId
  })

  //const { updateCommentLikes } = props

  /*useEffect(() => {
    const commentLikes = {
      likes: {
        total: totalLikes,
        users: props.likes.users.includes(props.currentUserId) ? props.likes.users : [...props.likes.users, props.currentUserId]
      },
      dislikes: {
        total: totalDislikes,
        users: props.dislikes.users.includes(props.currentUserId) ? props.dislikes.users : [...props.dislikes.users, props.currentUserId]
      },
    }
    updateCommentLikes(commentLikes)
  }, [totalLikes, totalDislikes])*/

  return (
    <section className="likesSection">
      <div className="likesSection__container">
        <button onClick={() => handleLikes('like')} className="button">
          <LikeIcon
            className={addClass({
              button__disable: !liked,
              'button__like--enable': liked
            })}
          />
        </button>
        <span className="likesSection__counter">{subNumber(totalLikes)}</span>
      </div>
      <div className="likesSection__container">
        <button onClick={() => handleLikes('dislike')} className="button">
          <DislikeIcon
            className={addClass({
              button__disable: !disliked,
              'button__dislike--enable': disliked
            })}
          />
        </button>
        <span className="likesSection__counter">{subNumber(totalDislikes)}</span>
      </div>
    </section>
  )
}

export default LikesSection
