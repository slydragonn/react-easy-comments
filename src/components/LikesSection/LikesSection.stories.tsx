import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import LikesSection from './LikesSection'

export default {
  title: 'LikesSection',
  component: LikesSection
} as ComponentMeta<typeof LikesSection>

const Template: ComponentStory<typeof LikesSection> = args => (
  <LikesSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  likes: {
    total: 1150,
    users: ['1234', '3245', '0001']
  },
  dislikes: {
    total: 12325456,
    users: []
  },
  currentUserId: '0001'
}
