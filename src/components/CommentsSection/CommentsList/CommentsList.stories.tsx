/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { comments, noLikesComments } from '../../../helpers'
import CommentsList from './CommentsList'

export default {
  title: 'CommentsList',
  component: CommentsList
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = args => (
  <CommentsList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
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
  ]
}

export const Secundary = Template.bind({})
Secundary.args = {
  initialComments: [
    noLikesComments,
    (el: any) => ({
      commentId: el.commentId,
      userId: el.userId,
      username: el.username,
      comment: el.comment,
      creationDate: el.creationDate,
    })
  ],
  options: {
    likes: 'no-likes'
  }
}

export const Tertiary = Template.bind({})
Tertiary.args = {
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
  options: {
    theme: 'dark'
  }
}