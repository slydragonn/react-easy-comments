import addClases from 'classnames'
import DOMPurify from 'dompurify'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import './Form.scss'

interface FormOptions {
  placeholder: string
  maxLength: number
}
export interface FormProps {
  theme?: 'default' | 'dark'
  initialValue?: string
  onSend: (comment: string) => void
  options: FormOptions
}

const CommentForm = ({
  theme = 'default',
  initialValue,
  onSend,
  options
}: FormProps) => {
  const [formValue, setFormValue] = useState(initialValue ?? '')

  const handleClick = () => {
    const cleanValue = DOMPurify.sanitize(formValue)
    onSend(cleanValue)
    return setFormValue(() => '')
  }

  return (
    <section className="form">
      <input
        value={formValue}
        onChange={evt => setFormValue(() => evt.target.value)}
        placeholder={options.placeholder}
        maxLength={options.maxLength}
        type="text"
        name="comment-form"
        className={addClases('form__input', {
          'form__input--dark': theme === 'dark'
        })}
      />
      <button onClick={handleClick} className="form__button">
        <IoMdSend
          className={addClases('form__send', {
            'form__send--dark': theme === 'dark'
          })}
        />
      </button>
    </section>
  )
}

export default CommentForm
