import {
  orderItems,
  orderItem,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from './orderItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderItems', () => {
  scenario('returns all orderItems', async (scenario) => {
    const result = await orderItems()

    expect(result.length).toEqual(Object.keys(scenario.orderItem).length)
  })

  scenario('returns a single orderItem', async (scenario) => {
    const result = await orderItem({ id: scenario.orderItem.one.id })

    expect(result).toEqual(scenario.orderItem.one)
  })

  scenario('creates a orderItem', async (scenario) => {
    const result = await createOrderItem({
      input: {
        buyerId: scenario.orderItem.two.buyerId,
        orderItemId: scenario.orderItem.two.orderItemId,
        orderItemStatus: 'String',
      },
    })

    expect(result.buyerId).toEqual(scenario.orderItem.two.buyerId)
    expect(result.orderItemId).toEqual(scenario.orderItem.two.orderItemId)
    expect(result.orderItemStatus).toEqual('String')
  })

  scenario('updates a orderItem', async (scenario) => {
    const original = await orderItem({ id: scenario.orderItem.one.id })
    const result = await updateOrderItem({
      id: original.id,
      input: { orderItemStatus: 'String2' },
    })

    expect(result.orderItemStatus).toEqual('String2')
  })

  scenario('deletes a orderItem', async (scenario) => {
    const original = await deleteOrderItem({ id: scenario.orderItem.one.id })
    const result = await orderItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
