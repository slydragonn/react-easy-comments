import addClass from 'classnames'
import React from 'react'
import {
  AiFillDislike as DislikeIcon,
  AiFillLike as LikeIcon
} from 'react-icons/ai'
import { useLikes } from '../../hooks'
import { Params as Props } from '../../types'
import { subNumber } from '../../utils'
import './Likes.scss'


const LikesSection = ({
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
        <span className="likesSection__counter">
          {subNumber(totalDislikes)}
        </span>
      </div>
    </section>
  )
}

export default LikesSection
