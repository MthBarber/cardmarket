import { render } from '@redwoodjs/testing/web'

import NewItemForSaleFormPage from './NewItemForSaleFormPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewItemForSaleFormPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewItemForSaleFormPage />)
    }).not.toThrow()
  })
})
