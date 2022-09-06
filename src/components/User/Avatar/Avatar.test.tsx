import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import Avatar from './Avatar'

describe('<Avatar />', () => {
  const username = 'Alogo'
  const defaultOptions = {
    profileImage: false
  }

  test('Renders the Avatar component', () => {
    render(<Avatar name={username} options={defaultOptions} />)
  })

  test('Show character as profile image', () => {
    render(<Avatar name={username} options={defaultOptions} />)
    expect(screen.getByRole('link')).toHaveTextContent('A')
  })

  test('Show the profile image', () => {
    const profileImageUrl = 'https://avatars.githubusercontent.com/u/86858494?v=4'

    render(<Avatar name={username} image={profileImageUrl} options={{profileImage: true}} />)
    expect(screen.getByRole('img')).toHaveAccessibleName(`${username} profile image`)
    expect(screen.getByRole('img')).toHaveProperty('src', profileImageUrl)
  })
  
  test('Default profile url', () => {
    render(<Avatar name={username} options={defaultOptions}/>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '#')
  })
})