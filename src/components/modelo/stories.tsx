import { Highlight } from '.'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Heading',
  component: Highlight,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Highlight/>

