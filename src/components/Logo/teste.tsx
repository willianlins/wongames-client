import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
