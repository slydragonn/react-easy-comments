import addClass from 'classnames'
import React, { useEffect, useState } from 'react'
import { AiOutlineMore as MenuIcon } from 'react-icons/ai'
import { MdModeEdit as EditIcon } from 'react-icons/md'
import { RiDeleteBin4Fill as DeleteIcon } from 'react-icons/ri'
import { Theme } from '../../types'
import './Menu.scss'

export interface MenuProps {
  theme: Theme
  commentId: string
  edit: boolean
  onEdit: (context: 'cancel' | 'edit') => void
  onDelete: (commentId: string) => void
}

const Menu = ({
  theme = 'default',
  commentId,
  edit,
  onEdit,
  onDelete
}: MenuProps) => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(show => !show)
  }

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).matches('#menu__icon' + commentId) &&
        !(event.target as HTMLElement).matches('#menu' + commentId)
      ) {
        setShow(() => false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', (event: MouseEvent) => onClick(event))
    }
  }, [])

  return (
    <section className="menu">
      <button className="menu__button" onClick={handleClick}>
        <MenuIcon
          id={'menu__icon' + commentId}
          className={addClass('menu__icon', {
            'menu__icon--dark': theme === 'dark'
          })}
        />
      </button>
      <ul
        id={'menu' + commentId}
        className={addClass('menu__hidden', {
          'menu__hidden--dark': theme === 'dark',
          'menu__hidden--show': show
        })}
      >
        <li
          className={addClass('menu__item', {
            'menu__item--hidden': edit
          })}
          onClick={() => onEdit('edit')}
        >
          <EditIcon className="menu__itemIcon" />
          Edit
        </li>
        <li
          className={addClass('menu__item', {
            'menu__item--hidden': edit
          })}
          onClick={() => onDelete(commentId)}
        >
          <DeleteIcon className="menu__itemIcon" /> Delete
        </li>
        <li
          className={addClass('menu__item', 'menu__item--cancel', {
            'menu__item--hidden': !edit
          })}
          onClick={() => onEdit('cancel')}
        >
          Cancel
        </li>
      </ul>
    </section>
  )
}

export default Menu
