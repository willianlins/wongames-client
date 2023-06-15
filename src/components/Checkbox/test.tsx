
import { renderWithTheme } from 'utils/tests/helpers'
import {screen} from '@testing-library/react'
import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

  })
})
