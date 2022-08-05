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
  commentId: "123",
  currentUser: {
    id: "001",
    likes: ["123", "222"],
    dislikes: []
  },
  likes: 2,
  dislikes: 0,
  updateCommentLikes: (commentLikes) => console.log(commentLikes)
}
