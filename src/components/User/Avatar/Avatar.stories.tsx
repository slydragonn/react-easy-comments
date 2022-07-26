import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'alejandra Espada',
  image:
    'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  profileLink:
    'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  options: {
    profileImage: true
  }
}

export const Secundary = Template.bind({})
Secundary.args = {
  name: 'Maria Puerta',
  options: {
    profileImage: false
  }
}
