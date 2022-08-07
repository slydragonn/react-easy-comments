import addClass from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { BsFillCaretDownFill as DownIcon } from 'react-icons/bs'
import { Theme } from '../../../types'
import './Text.scss'

export interface Props {
  children: string
  theme: Theme
}

const Text = ({ children, theme = 'default' }: Props) => {
  const [showSeeMore, setShowSeeMore] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const textContainer = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!textContainer) return

    const height = textContainer.current?.clientHeight
    if (height && height >= 68) {
      setShowSeeMore(() => true)
    }
  }, [])

  const handleClick = () => {
    return setShowAll(show => !show)
  }

  return (
    <section>
      <section
        ref={textContainer}
        className={addClass('text', {
          'text--dark': theme === 'dark',
          'text--show': showAll
        })}
      >
        {children}
      </section>
      {showSeeMore && (
        <div
          onClick={handleClick}
          className={addClass('seemore', {
            'seemore--dark': theme === 'dark'
          })}
        >
          <DownIcon
            className={addClass('seemore__icon', {
              'seemore__icon--dark': theme === 'dark'
            })}
          />
          <span
            className={addClass('seemore__text', {
              'seemore__text--dark': theme === 'dark'
            })}
          >
            See More
          </span>
        </div>
      )}
    </section>
  )
}

export default Text
