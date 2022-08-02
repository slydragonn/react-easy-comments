import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Button from './Button'

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const HelloWorld = Template.bind({})
