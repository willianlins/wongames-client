import { Logo } from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story = (args) => <Logo {...args} />
