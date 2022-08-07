import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Text from './Text'

export default {
  title: 'Comment/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe consequatur, reprehenderit nesciunt deserunt recusandae officia, id qui nihil dolores possimus placeat assumenda ullam quasi amet est delectus. Cupiditate, sequi!Iusto qui rem quibusdam fugit exercitationem nostrum voluptas corporis aperiam maxime corrupti blanditiis, iure modi, quia unde consequatur quis veniam quas perferendis. Libero, accusamus ipsum unde illum cupiditate inventore quo? Quod distinctio exercitationem, possimus rerum a pariatur, totam cupiditate, sapiente nisi quo officiis sunt ex cumque facilis alias provident in odio animi. Beatae suscipit debitis ducimus possimus cumque unde veritatis. Esse cupiditate mollitia culpa dolore cumque incidunt et accusamus similique corrupti reprehenderit dolorum at aut porro, maiores iure impedit placeat. Nam et numquam porro, consequatur commodi itaque suscipit unde odio.'

export const Primary = Template.bind({})
Primary.args = {
  children: paragraph
}

export const Secundary = Template.bind({})
Secundary.args = {
  children: paragraph,
  theme: 'dark'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  theme: 'default'
}
