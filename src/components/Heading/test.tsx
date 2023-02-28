import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Heading>Won games</Heading>)

    expect(screen).toHaveStyle({
      width: '11rem'
    })
  })
})
