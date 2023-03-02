import { Menu, MenuProps } from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args}/>

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
