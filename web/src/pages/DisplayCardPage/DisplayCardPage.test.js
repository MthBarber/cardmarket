import { render } from '@redwoodjs/testing/web'

import DisplayCardPage from './DisplayCardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DisplayCardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayCardPage />)
    }).not.toThrow()
  })
})
