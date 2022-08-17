import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { comments } from '../../../helpers'
import TotalComments from './Total'

export default {
  title: 'CommentsSection/TotalComments',
  component: TotalComments
} as ComponentMeta<typeof TotalComments>

const Template: ComponentStory<typeof TotalComments> = args => (
  <TotalComments {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  theme: 'default',
  comments: comments
}

export const Secundary = Template.bind({})
Secundary.args = {
  theme: 'dark',
  comments: comments
}
