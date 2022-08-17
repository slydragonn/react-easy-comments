import addClass from 'classnames'
import React, { useEffect, useState } from 'react'
import { EasyComment, Theme } from '../../../types'
import './Total.scss'

export interface Props {
  theme?: Theme
  comments: EasyComment[]
}

const TotalComments = ({ theme = 'default', comments }: Props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    comments.length > 0 && setCount(() => comments.length)
  }, [comments])

  return (
    <section
      className={addClass('count', {
        'count--dark': theme === 'dark'
      })}
    >
      <p>
        <span>{count}</span> Comments
      </p>
    </section>
  )
}

export default TotalComments
