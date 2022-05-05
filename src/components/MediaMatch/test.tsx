import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Desktop</h1>
        </MediaMatch>
      </>
    )
    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('Should render MediaMatch with display none by default ', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('Should render MediaMatch in mobile when lessThan media is passed ', () => {
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width:768px)'
    })
  })

  it('Should render MediaMatch in desktop when greaterThan media is passed ', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width:768px)'
    })
  })
})
