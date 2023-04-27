import { renderWithTheme } from 'utils/tests/helpers'

import { Highlight } from '.'

describe('<Heading />', () => {
  it('should render a white hading by default', () => {
    renderWithTheme(<Highlight></Highlight>)

  })
})
