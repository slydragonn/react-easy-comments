import addClass from 'classnames'
import React from 'react'
import { Theme } from '../../../types'
import './comments.scss'

export interface CommentsLayoutProps {
  children: React.ReactNode
  theme?: Theme
}

const CommentsLayout = ({
  children,
  theme = 'default'
}: CommentsLayoutProps) => {
  return (
    <section
      className={addClass('comments', { 'comments--dark': theme === 'dark' })}
    >
      {children}
    </section>
  )
}

export default CommentsLayout
