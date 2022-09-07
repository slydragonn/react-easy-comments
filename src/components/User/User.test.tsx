import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import User from './User'

describe('<User />', () => {
  const defaultOptions = {
    creationDate: true,
    profileImage: false
  }

  test('Renders User component', () => {
    render(<User name='Alogo' creationDate='12-09-2020' options={defaultOptions}/>)
  })

  test('Show correctly the creation date', () => {
    render(<User name='Alogo' creationDate='12-09-2020' options={defaultOptions}/>)
    expect(screen.getByTestId('creation-date')).toHaveTextContent('2 years ago')
  })
  
})