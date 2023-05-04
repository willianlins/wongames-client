import { renderWithTheme } from 'utils/tests/helpers'

import { Slider } from '.'

describe('<Slider />', () => {
  it('should render a white hading by default', () => {
    renderWithTheme(<Slider></Slider>)

  })
})
