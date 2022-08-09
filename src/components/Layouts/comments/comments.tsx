import addClass from 'classnames'
import React from 'react'
import { Theme } from '../../../types'
import './comments.scss'

export interface Props {
  children: React.ReactNode
  theme?: Theme
}

const CommentsLayout = ({ children, theme = 'default' }: Props) => {
  return (
    <section
      className={addClass('comments', { 'comments--dark': theme === 'dark' })}
    >
      {children}
    </section>
  )
}

export default CommentsLayout
