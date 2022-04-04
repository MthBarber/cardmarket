import { db } from 'src/lib/db'

export const itemForSales = () => {
  return db.itemForSale.findMany()
}

//added 22/03/2022
export const itemsForSaleUser = ({ userId }) => {
  return db.itemForSale.findMany({
    where: { userId },
  })
}

//Changed from findUnique to findMany and id to cardId
export const itemForSale = ({ cardId }) => {
  return db.itemForSale.findMany({
    where: { cardId },
  })
}

//new query added 30/3/2022 where correct plural was added in the SDL
export const itemsForSale = ({ cardId }) => {
  return db.itemForSale.findMany({
    where: { cardId },
  })
}

export const cardListingItemsForSale = ({ cardId }) => {
  return db.itemForSale.findMany({
    where: {
      cardId,
      orderItems: {
        every: {
          orderItemStatus: '', //was previously InBasket and changed to RemovedFromBasket
        },
      },
    },
  })
}

export const ItemForSale = {
  card: (_obj, { root }) =>
    db.itemForSale.findUnique({ where: { id: root.id } }).card(),
  user: (_obj, { root }) =>
    db.itemForSale.findUnique({ where: { id: root.id } }).user(),
  orderItems: (_obj, { root }) =>
    db.itemForSale.findUnique({ where: { id: root.id } }).orderItems(),
}
// custom service
//export const itemsForSale = (cardId) => {
//  return db.itemForSale.findMany({
//    where: { cardId },
//  })
//}

// my mutation here
export const createItemForSale = ({ input }) => {
  return db.itemForSale.create({
    data: input,
    // where: { id },
  })
}
