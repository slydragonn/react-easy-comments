import addClass from 'classnames'
import React, { useState } from 'react'
import { BsFilterRight as FilterIcon } from 'react-icons/bs'
import { useMenu } from '../../../hooks'
import { Theme } from '../../../types'
import './Sort.scss'

export interface SortProps {
  theme?: Theme
  toggleSort: (kind: 'date' | 'likes') => void
}

const SortComments = ({ theme, toggleSort }: SortProps) => {
  const [isVisible, setVisibility] = useState(false)

  const toggleVisibility = () => setVisibility(visible => !visible)

  useMenu({
    func: () => setVisibility(() => false),
    selectors: ['.sortMenu__button', '.sortMenu__icon']
  })

  return (
    <section className="sortMenu">
      <span
        onClick={toggleVisibility}
        className={addClass('sortMenu__button', {
          'sortMenu__button--dark': theme === 'dark'
        })}
      >
        Sort By{' '}
        <FilterIcon
          className={addClass('sortMenu__icon', {
            'sortMenu__icon--dark': theme === 'dark'
          })}
        />
      </span>
      <ul
        className={addClass('sortMenu__list', {
          'sortMenu__list--show': isVisible,
          'sortMenu__list--dark': theme === 'dark'
        })}
      >
        <li className="sortMenu__item" onClick={() => toggleSort('date')}>
          Date
        </li>
        <li className="sortMenu__item" onClick={() => toggleSort('likes')}>
          Likes
        </li>
      </ul>
    </section>
  )
}

export default SortComments
