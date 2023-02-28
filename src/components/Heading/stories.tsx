import { Heading, HeadingProps } from '.'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />


Default.args = {
  children: 'Most populars'
}
