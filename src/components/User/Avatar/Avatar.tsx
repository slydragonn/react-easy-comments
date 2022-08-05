import React from 'react'
import '../styles.scss'

export interface Props {
  name: string
  image?: string
  profileLink?: string
}

const Avatar = ({ name, image, profileLink }: Props) => {
  return (
    <section className="user__avatar">
      <a href={profileLink ?? '#'} target="_blank" rel="noreferrer">
        {image ? (
          <img src={image} alt={`${name} profile image`} />
        ) : (
          <div>{name[0].toLocaleUpperCase()}</div>
        )}
      </a>
    </section>
  )
}

export default Avatar
