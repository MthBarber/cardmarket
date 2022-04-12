import {
  completedOrders,
  completedOrder,
  createCompletedOrder,
  updateCompletedOrder,
  deleteCompletedOrder,
} from './completedOrders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('completedOrders', () => {
  scenario('returns all completedOrders', async (scenario) => {
    const result = await completedOrders()

    expect(result.length).toEqual(Object.keys(scenario.completedOrder).length)
  })

  scenario('returns a single completedOrder', async (scenario) => {
    const result = await completedOrder({
      id: scenario.completedOrder.one.id,
    })

    expect(result).toEqual(scenario.completedOrder.one)
  })

  scenario('creates a completedOrder', async (scenario) => {
    const result = await createCompletedOrder({
      input: { userId: scenario.completedOrder.two.userId },
    })

    expect(result.userId).toEqual(scenario.completedOrder.two.userId)
  })

  scenario('updates a completedOrder', async (scenario) => {
    const original = await completedOrder({
      id: scenario.completedOrder.one.id,
    })

    const result = await updateCompletedOrder({
      id: original.id,
      input: { userId: scenario.completedOrder.two.userId },
    })

    expect(result.userId).toEqual(scenario.completedOrder.two.userId)
  })

  scenario('deletes a completedOrder', async (scenario) => {
    const original = await deleteCompletedOrder({
      id: scenario.completedOrder.one.id,
    })

    const result = await completedOrder({ id: original.id })

    expect(result).toEqual(null)
  })
})
