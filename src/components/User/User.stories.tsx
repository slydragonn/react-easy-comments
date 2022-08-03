import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import User from './User'

export default {
  title: 'User',
  component: User
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => <User {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  name: 'Alejandro Londoño',
  image: 'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  creationDate: '5 days ago',
  theme: 'light'
}

export const NoImage = Template.bind({})
NoImage.args = {
  name: 'Alejandro Londoño',
  creationDate: '5 days ago',
  theme: 'light'
}

export const NoImageDark = Template.bind({})
NoImageDark.args = {
  name: 'Alejandro Londoño',
  creationDate: '5 days ago',
  theme: 'dark'
}

export const Dark = Template.bind({})
Dark.args = {
  name: 'Alejandro Londoño',
  image: 'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
  creationDate: '5 days ago',
  theme: 'dark'
}

export const FormContext = Template.bind({})
FormContext.args = {
  context: 'form',
  name: 'Alejandro Londoño',
  image: 'https://i.pinimg.com/236x/22/8a/c2/228ac2bc5c7e3992e98ed4035e343b5f.jpg',
}