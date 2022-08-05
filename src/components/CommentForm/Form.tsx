import addClases from 'classnames'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import './Form.scss'

export interface Props {
  theme?: 'default' | 'dark'
  initialValue?: string
  onSend: (comment: string) => void
}

const CommentForm = ({ theme = 'default', initialValue, onSend }: Props) => {
  const [formValue, setFormValue] = useState(initialValue ?? '')

  const handleClick = () => {
    onSend(formValue)
    return setFormValue(() => '')
  }

  return (
    <section className="form">
      <input
        value={formValue}
        onChange={evt => setFormValue(() => evt.target.value)}
        placeholder="Add a comment..."
        type="text"
        name="comment-form"
        className={addClases("form__input", {
          "form__input--dark": theme === 'dark'
        })}
      />
      <button onClick={handleClick} className="form__button">
        <IoMdSend className={addClases('form__send', {
          'form__send--dark': theme === 'dark'
        })}/>
      </button>
    </section>
  )
}

export default CommentForm
