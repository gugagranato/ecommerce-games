import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/^won games$/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo color="black" size="large" />)
    expect(screen.getByRole('img').parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo by default ', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByRole('img').parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it(`should render logo without text when hideOnMobile is passed and it's less than medium(768px)`, () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByRole('img').parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:768px)'
      }
    )
  })
})
