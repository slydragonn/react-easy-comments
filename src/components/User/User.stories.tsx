import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import User from './User'

export default {
  title: 'User',
  component: User
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = args => <User {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'Alejandra Espada',
  image:
    'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  creationDate: '09-23-2020',
  theme: 'default'
}

export const Secundary = Template.bind({})
Secundary.args = {
  name: 'Alejandra Espada',
  image:
    'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  creationDate: '12-04-2002',
  theme: 'dark'
}

export const NoImagePrimary = Template.bind({})
NoImagePrimary.args = {
  name: 'alejandra Espada',
  creationDate: '08-31-2021',
  theme: 'default'
}

export const NoImageSecundary = Template.bind({})
NoImageSecundary.args = {
  name: 'Alejandra Espada',
  creationDate: '7-12-2022',
  theme: 'dark'
}
