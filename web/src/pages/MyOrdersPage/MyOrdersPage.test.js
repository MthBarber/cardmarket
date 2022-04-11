import { render } from '@redwoodjs/testing/web'

import MyOrdersPage from './MyOrdersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyOrdersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyOrdersPage />)
    }).not.toThrow()
  })
})
