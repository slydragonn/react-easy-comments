import addClass from 'classnames'
import React from 'react'
import { Theme } from '../../types'
import { getTimeAgo } from '../../utils'
import Avatar from './Avatar'
import './User.scss'

export interface Props {
  name: string
  image?: string
  profileLink?: string
  creationDate?: string
  theme?: Theme
}

const User = ({ name, image, profileLink, creationDate, theme = 'default' }: Props) => {
  return (
    <section className="user">
      <Avatar name={name} image={image} profileLink={profileLink} />
      <div className={addClass('user__info', {
        'user__info--dark': theme === 'dark'
      })}>
        <p className='user__name'>{name}</p>
        {creationDate && <span className='user__date'>{getTimeAgo(creationDate)}</span>}
      </div>
    </section>
  )
}

export default User
