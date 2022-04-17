import { db } from 'src/lib/db'

export const completedOrders = () => {
  return db.completedOrder.findMany()
}

export const completedOrderUser = ({ userId }) => {
  return db.completedOrder.findMany({
    where: { userId },
  })
}

export const completedOrder = ({ id }) => {
  return db.completedOrder.findUnique({
    where: { id },
  })
}

export const createCompletedOrder = async ({ input }) => {
  const completedOrder = await db.completedOrder.create({
    data: { userId: input.userId },
  })

  if (input.orderItemIds) {
    for (const orderItemId of input.orderItemIds) {
      await db.orderItem.update({
        where: { id: orderItemId },
        data: { completedOrderId: completedOrder.id },
      })
    }
  }
  return completedOrder
}

export const updateCompletedOrder = ({ id, input }) => {
  return db.completedOrder.update({
    data: input,
    where: { id },
  })
}

export const deleteCompletedOrder = ({ id }) => {
  return db.completedOrder.delete({
    where: { id },
  })
}

export const CompletedOrder = {
  user: (_obj, { root }) =>
    db.completedOrder.findUnique({ where: { id: root.id } }).user(),
  orderItems: (_obj, { root }) =>
    db.completedOrder.findUnique({ where: { id: root.id } }).orderItems(),
}
