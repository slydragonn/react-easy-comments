import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Comment from './Comment'

export default {
  title: 'Comment',
  component: Comment
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

const comment = {
  commentId: '12345',
  userId: '0001',
  username: 'Alejandro LG',
  comment:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt aut excepturi itaque magni commodi fugiat accusamus iusto nesciunt minima! Error harum corporis recusandae non, in eveniet maiores repellendus repellat!',
  creationDate: '08-18-2021',
  likes: 123,
  dislikes: 12
}

const largeText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe consequatur, reprehenderit nesciunt deserunt recusandae officia, id qui nihil dolores possimus placeat assumenda ullam quasi amet est delectus. Cupiditate, sequi!Iusto qui rem quibusdam fugit exercitationem nostrum voluptas corporis aperiam maxime corrupti blanditiis, iure modi, quia unde consequatur quis veniam quas perferendis. Libero, accusamus ipsum unde illum cupiditate inventore quo? Quod distinctio exercitationem, possimus rerum a pariatur, totam cupiditate, sapiente nisi quo officiis sunt ex cumque facilis alias provident in odio animi. Beatae suscipit debitis ducimus possimus cumque unde veritatis. Esse cupiditate mollitia culpa dolore cumque incidunt et accusamus similique corrupti reprehenderit dolorum at aut porro, maiores iure impedit placeat. Nam et numquam porro, consequatur commodi itaque suscipit unde odio.'

const user = {
  id: '0001',
  likes: ['12345'],
  dislikes: []
}

export const Primary = Template.bind({})
Primary.args = {
  comment,
  theme: 'default',
  user,
  onUpdate: comment => console.log(comment),
  onDelete: commentId => console.log(commentId)
}

export const Secundary = Template.bind({})
Secundary.args = {
  comment,
  theme: 'dark',
  user,
  onUpdate: comment => console.log(comment),
  onDelete: commentId => console.log(commentId)
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  comment: {
    ...comment,
    comment: largeText
  },
  user,
  onUpdate: comment => console.log(comment),
  onDelete: commentId => console.log(commentId)
}
