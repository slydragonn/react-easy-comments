import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: 'default',
  commentId: '123',
  onEdit: commentId => console.log(commentId),
  onDelete: commentId => console.log(commentId),
  options: {
    editable: true,
    erasable: true
  }
}

export const Secundary = Template.bind({})
Secundary.args = {
  theme: 'dark',
  commentId: '123',
  onEdit: commentId => console.log(commentId),
  onDelete: commentId => console.log(commentId),
  options: {
    editable: true,
    erasable: false
  }
}
