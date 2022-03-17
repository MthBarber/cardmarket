import { itemForSales } from './itemForSales'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('itemForSales', () => {
  scenario('returns all itemForSales', async (scenario) => {
    const result = await itemForSales()

    expect(result.length).toEqual(Object.keys(scenario.itemForSale).length)
  })
})
