import addClass from 'classnames'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  BsFillCaretDownFill as DownIcon,
  BsFillCaretUpFill as UpIcon
} from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { Theme } from '../../../types'
import './Text.scss'

export interface Props {
  children: string
  theme: Theme
  edit: boolean
  onEdited: () => void
  onChange: (comment:string) => void
}

const Text = ({ children, theme = 'default', edit, onEdited, onChange }: Props) => {
  const [showSeeMore, setShowSeeMore] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const textContainer = useRef<HTMLElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    height > 68 ? setShowSeeMore(() => true) : setShowSeeMore(() => false)
  }, [height])

  useLayoutEffect(() => {
    const updateSize = () => {
      setHeight(() => textContainer.current?.clientHeight ?? 0)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleClick = () => {
    return setShowAll(show => !show)
  }

  if (edit) {
    return (
      <section className="edit">
        <textarea
          className={addClass('input', { 'input--dark': theme === 'dark' })}
          name="comment-edit"
          placeholder="Add a comment..."
          value={children}
          onChange={evt => onChange(evt.target.value)}
        />
        <button className="button" onClick={onEdited}>
          <IoMdSend className="button__icon" />
        </button>
      </section>
    )
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
          {showAll ? (
            <UpIcon
              className={addClass('seemore__icon', {
                'seemore__icon--dark': theme === 'dark'
              })}
            />
          ) : (
            <DownIcon
              className={addClass('seemore__icon', {
                'seemore__icon--dark': theme === 'dark'
              })}
            />
          )}
          <span
            className={addClass('seemore__text', {
              'seemore__text--dark': theme === 'dark'
            })}
          >
            {showAll ? 'Hide' : 'See More'}
          </span>
        </div>
      )}
    </section>
  )
}

export default Text
