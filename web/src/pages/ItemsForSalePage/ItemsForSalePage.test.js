import { render } from '@redwoodjs/testing/web'

import ItemsForSalePage from './ItemsForSalePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ItemsForSalePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemsForSalePage />)
    }).not.toThrow()
  })
})
