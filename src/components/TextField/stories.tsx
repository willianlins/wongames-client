import { TextField, TextFieldProps } from '.'
import { Meta, Story } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'


export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as unknown as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{maxWidth: 300, padding: 15}}>
    <TextField {...args}/>
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
