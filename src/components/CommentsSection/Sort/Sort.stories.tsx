import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SortComments from './Sort'

export default {
  title: 'CommentsSection/Sort',
  component: SortComments
} as ComponentMeta<typeof SortComments>

const Template: ComponentStory<typeof SortComments> = args => (
  <SortComments {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  toggleSort: kind => console.log(kind)
}

export const Secundary = Template.bind({})
Secundary.args = {
  theme: 'dark',
  toggleSort: kind => console.log(kind)
}
