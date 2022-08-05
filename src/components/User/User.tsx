import React from 'react'
import { useToggleTheme } from '../../hooks'
import { getTimeAgo } from '../../utils'
import Avatar from './Avatar'

export interface Props {
  name: string
  image?: string
  profileLink?: string
  creationDate?: string
  theme?: 'dark' | 'light'
}

const User = ({ name, image, profileLink, creationDate, theme }: Props) => {
  const themeUserInfo = useToggleTheme({
    theme: theme ?? 'light',
    defaultValue: 'user__info',
    variant: 'user__info user__info--dark'
  })

  return (
    <section className="user">
      <Avatar name={name} image={image} profileLink={profileLink} />
      <div className={themeUserInfo}>
        <p>{name}</p>
        {creationDate && <span>{getTimeAgo(creationDate)}</span>}
      </div>
    </section>
  )
}

export default User
