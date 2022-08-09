import addClass from 'classnames'
import React, { useState } from 'react'
import { AiOutlineMore as MenuIcon } from 'react-icons/ai'
import { MdModeEdit as EditIcon } from 'react-icons/md'
import { RiDeleteBin4Fill as DeleteIcon } from 'react-icons/ri'
import { Theme } from '../../types'
import './Menu.scss'

export interface Props {
  theme: Theme
  commentId: string
  edit: boolean
  onEdit: (commentId: string) => void
  onDelete: (commentId: string) => void
}

const Menu = ({ theme = 'default', commentId, edit, onEdit, onDelete }: Props) => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(show => !show)
  }

  const handleBlur = () => {
    return (
      show &&
      setTimeout(() => {
        setShow(() => false)
      }, 300)
    )
  }

  return (
    <section className="menu">
      <button
        className="menu__button"
        onClick={handleClick}
        onBlur={handleBlur}
      >
        <MenuIcon
          className={addClass('menu__icon', {
            'menu__icon--dark': theme === 'dark'
          })}
        />
      </button>
      <ul
        className={addClass('menu__hidden', {
          'menu__hidden--dark': theme === 'dark',
          'menu__hidden--show': show
        })}
      >
        <li className={addClass("menu__item", {
          "menu__item--hidden": edit
        })}onClick={() => onEdit(commentId)}>
          <EditIcon className="menu__itemIcon" />
          Edit
        </li>
        <li className={addClass("menu__item", {
          "menu__item--hidden": edit
        })} onClick={() => onDelete(commentId)}>
          <DeleteIcon className="menu__itemIcon" /> Delete
        </li>
        <li className={addClass("menu__item", "menu__item--cancel", {
          "menu__item--hidden": !edit
        })} onClick={() => onEdit(commentId)}>
          Cancel
        </li>
      </ul>
    </section>
  )
}

export default Menu
