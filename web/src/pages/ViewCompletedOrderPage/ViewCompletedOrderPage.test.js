import { render } from '@redwoodjs/testing/web'

import ViewCompletedOrderPage from './ViewCompletedOrderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewCompletedOrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewCompletedOrderPage />)
    }).not.toThrow()
  })
})
