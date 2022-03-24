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

export const ItemForSale = {
  card: (_obj, { root }) =>
    db.itemForSale.findUnique({ where: { id: root.id } }).card(),
  user: (_obj, { root }) =>
    db.itemForSale.findUnique({ where: { id: root.id } }).user(),
}
// custom service
//export const itemsForSale = (cardId) => {
//  return db.itemForSale.findMany({
//    where: { cardId },
//  })
//}

// my mutation here
export const createItemForSale = ({ id, input }) => {
  return db.itemForSale.create({
    data: input,
    where: { id },
  })
}
