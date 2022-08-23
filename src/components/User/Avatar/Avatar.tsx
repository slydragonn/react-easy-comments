import React from 'react'
import './Avatar.scss'

interface AvatarOptions {
  profileImage: boolean
}
export interface AvatarProps {
  name: string
  image?: string
  profileLink?: string
  options: AvatarOptions
}

const Avatar = ({ name, image, profileLink, options }: AvatarProps) => {
  return (
    <section className="avatar">
      <a
        href={profileLink ?? '#'}
        target="_blank"
        rel="noreferrer"
        className="avatar__link"
      >
        {image && options.profileImage ? (
          <img
            className="avatar__icon"
            src={image}
            alt={`${name} profile image`}
          />
        ) : (
          <p className="avatar__char">{name[0].toLocaleUpperCase()}</p>
        )}
      </a>
    </section>
  )
}

export default Avatar
