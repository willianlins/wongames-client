import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getAllByRole('button', { name: /Button/i }))
  })
})
