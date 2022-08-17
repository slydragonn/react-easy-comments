/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { comments, currentUser } from '../../helpers'
import CommentsSection from './CommentsSection'

export default {
  title: 'CommentsSection',
  component: CommentsSection
} as ComponentMeta<typeof CommentsSection>

const Template: ComponentStory<typeof CommentsSection> = args => (
  <CommentsSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  currentUser: {
    id: currentUser.id,
    name: currentUser.name,
    likes: currentUser.likes,
    dislikes: currentUser.dislikes
  },
  initialComments: [
    comments,
    (el: any) => ({
      commentId: el.commentId,
      userId: el.userId,
      username: el.username,
      comment: el.comment,
      creationDate: el.creationDate,
      likes: el.likes,
      dislikes: el.dislikes
    })
  ],
  listeners: {
    onSubmit: comment => {
      console.log('story submit', comment)
    },
    onUpdate: (comment, currentUser) =>
      setTimeout(() => console.log('story update', comment, currentUser), 2000),
    onDelete: commentId => {
      console.log('story delete', commentId)
    }
  }
}

export const Secundary = Template.bind({})
Secundary.args = {
  currentUser: {
    id: currentUser.id,
    name: currentUser.name,
    likes: currentUser.likes,
    dislikes: currentUser.dislikes
  },
  initialComments: [
    comments,
    (el: any) => ({
      commentId: el.commentId,
      userId: el.userId,
      username: el.username,
      comment: el.comment,
      creationDate: el.creationDate,
      likes: el.likes,
      dislikes: el.dislikes
    })
  ],
  listeners: {
    onSubmit: comment => {
      console.log('story submit', comment)
    },
    onUpdate: (comment, currentUser) =>
      setTimeout(() => console.log('story update', comment, currentUser), 2000),
    onDelete: commentId => {
      console.log('story delete', commentId)
    }
  },
  options: {
    theme: 'dark',
    filter: [false, 'likes']
  }
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  currentUser: {
    id: currentUser.id,
    name: currentUser.name,
    likes: currentUser.likes,
    dislikes: currentUser.dislikes
  },
  initialComments: [
    comments,
    (el: any) => ({
      commentId: el.commentId,
      userId: el.userId,
      username: el.username,
      comment: el.comment,
      creationDate: el.creationDate,
      likes: el.likes,
      dislikes: el.dislikes
    })
  ],
  listeners: {
    onSubmit: comment => {
      console.log('story submit', comment)
    },
    onUpdate: (comment, currentUser) =>
      setTimeout(() => console.log('story update', comment, currentUser), 2000),
    onDelete: commentId => {
      console.log('story delete', commentId)
    }
  },
  options: {
    filter: [true, 'likes'],
    totalComments: false
  }
}
