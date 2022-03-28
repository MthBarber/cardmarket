import { db } from 'src/lib/db'

export const orderItems = () => {
  return db.orderItem.findMany()
}

export const orderItem = ({ id }) => {
  return db.orderItem.findUnique({
    where: { id },
  })
}

export const createOrderItem = ({ input }) => {
  return db.orderItem.create({
    data: input,
  })
}

export const updateOrderItem = ({ id, input }) => {
  return db.orderItem.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderItem = ({ id }) => {
  return db.orderItem.delete({
    where: { id },
  })
}

export const OrderItem = {
  user: (_obj, { root }) =>
    db.orderItem.findUnique({ where: { id: root.id } }).user(),
  itemForSale: (_obj, { root }) =>
    db.orderItem.findUnique({ where: { id: root.id } }).itemForSale(),
}
