import React from 'react'
import './Avatar.scss'

export interface Props {
  name: string
  image?: string
  profileLink?: string
}

const Avatar = ({ name, image, profileLink }: Props) => {
  return (
    <section className="avatar">
      <a href={profileLink ?? '#'} target="_blank" rel="noreferrer" className='avatar__link'>
        {image ? (
          <img className='avatar__icon' src={image} alt={`${name} profile image`} />
        ) : (
          <p className='avatar__char'>{name[0].toLocaleUpperCase()}</p>
        )}
      </a>
    </section>
  )
}

export default Avatar
