import { Checkbox } from '.'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Checkbox/>

