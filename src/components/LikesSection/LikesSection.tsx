import addClass from 'classnames'
import React from 'react'
import {
  AiFillDislike as DislikeIcon,
  AiFillLike as LikeIcon
} from 'react-icons/ai'
import { useLikes } from '../../hooks'
import { LikeParams, Theme } from '../../types'
import { subNumber } from '../../utils'
import './Likes.scss'

export interface Props extends LikeParams {
  theme: Theme
}

const LikesSection = ({
  theme = 'default',
  commentId,
  currentUser,
  likes,
  dislikes,
  updateCommentLikes
}: Props) => {
  const { totalLikes, totalDislikes, liked, disliked, handleLikes } = useLikes({
    commentId,
    likes,
    dislikes,
    currentUser,
    updateCommentLikes
  })

  return (
    <section className="likesSection">
      <div className="likesSection__container">
        <button onClick={() => handleLikes('like')} className="button">
          <LikeIcon
            className={addClass({
              button__disable: theme === 'default' && !liked,
              'button__disable--dark': theme === 'dark' && !liked,
              'button__like--enable': liked
            })}
          />
        </button>
        <span
          className={addClass('likesSection__counter', {
            'likesSection__counter--dark': theme == 'dark'
          })}
        >
          {subNumber(totalLikes)}
        </span>
      </div>
      <div className="likesSection__container">
        <button onClick={() => handleLikes('dislike')} className="button">
          <DislikeIcon
            className={addClass({
              button__disable: theme === 'default' && !disliked,
              'button__disable--dark': theme === 'dark' && !disliked,
              'button__dislike--enable': disliked
            })}
          />
        </button>
        <span
          className={addClass('likesSection__counter', {
            'likesSection__counter--dark': theme == 'dark'
          })}
        >
          {subNumber(totalDislikes)}
        </span>
      </div>
    </section>
  )
}

export default LikesSection
