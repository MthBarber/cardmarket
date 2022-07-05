import { render } from '@redwoodjs/testing/web'

import SidebarHeader from './SidebarHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarHeader />)
    }).not.toThrow()
  })
})
