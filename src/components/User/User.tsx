import addClass from 'classnames'
import React from 'react'
import { Theme } from '../../types'
import { getTimeAgo } from '../../utils'
import Avatar from './Avatar'
import './User.scss'

interface UserOptions {
  creationDate: boolean
  profileImage: boolean
}
export interface UserProps {
  name: string
  image?: string
  profileLink?: string
  creationDate?: string
  theme?: Theme
  options: UserOptions
}

const User = ({
  name,
  image,
  profileLink,
  creationDate,
  theme = 'default',
  options
}: UserProps) => {
  return (
    <section className="user">
      <Avatar name={name} image={image} profileLink={profileLink} options={{
        profileImage: options.profileImage
      }}/>
      <div
        className={addClass('user__info', {
          'user__info--dark': theme === 'dark'
        })}
      >
        <p className="user__name">{name}</p>
        {(creationDate && options.creationDate) && (
          <span data-testid="creation-date" className="user__date">{getTimeAgo(creationDate)}</span>
        )}
      </div>
    </section>
  )
}

export default User
