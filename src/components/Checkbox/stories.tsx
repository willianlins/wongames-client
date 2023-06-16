import { Checkbox, CheckboxProps } from '.'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args}/>

