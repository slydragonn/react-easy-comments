import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CommentForm from './Form'

export default {
  title: 'CommentForm',
  component: CommentForm,
  argTypes: {
    theme: {
      name: 'theme',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: 'default',
      description: 'Component Theme',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      },
      control: {
        type: 'select',
        options: ['default', 'dark']
      }
    }
  }
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = args => (
  <CommentForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  initialValue: '',
  onSend: commet => console.log(commet),
  options: {
    maxLength: 500,
    placeholder: 'Add a comment...'
  }
}

export const Secundary = Template.bind({})
Secundary.args = {
  theme: 'dark',
  initialValue: '',
  onSend: commet => console.log(commet),
  options: {
    maxLength: 50,
    placeholder: 'Agregar un comentario...'
  }
}
