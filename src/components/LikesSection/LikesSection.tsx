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

export interface LikeProps extends LikeParams {
  theme: Theme
  hide: boolean
}

const LikesSection = ({
  theme = 'default',
  hide,
  commentId,
  currentUser,
  likes,
  dislikes,
  updateCommentLikes,
  options
}: LikeProps) => {
  const { state, handleLikes } = useLikes({
    commentId,
    likes,
    dislikes,
    currentUser,
    updateCommentLikes,
    options
  })

  return (
    <section
      className={addClass('likesSection', {
        'likesSection--hidden': hide
      })}
    >
      <div className="likesSection__container">
        <button onClick={() => handleLikes('like')} className="button">
          <LikeIcon
            className={addClass({
              button__disable: theme === 'default' && !state.liked,
              'button__disable--dark': theme === 'dark' && !state.liked,
              'button__like--enable': state.liked
            })}
          />
        </button>
        <span
          className={addClass('likesSection__counter', {
            'likesSection__counter--dark': theme == 'dark'
          })}
        >
          {subNumber(state.likesCount)}
        </span>
      </div>
      {
        options !== 'only-likes'
        &&
          <div className="likesSection__container">
          <button onClick={() => handleLikes('dislike')} className="button">
            <DislikeIcon
              className={addClass({
                button__disable: theme === 'default' && !state.disliked,
                'button__disable--dark': theme === 'dark' && !state.disliked,
                'button__dislike--enable': state.disliked
              })}
            />
          </button>
          <span
            className={addClass('likesSection__counter', {
              'likesSection__counter--dark': theme == 'dark'
            })}
          >
            {subNumber(state.dislikesCount)}
          </span>
        </div>
      }
    </section>
  )
}

export default LikesSection
