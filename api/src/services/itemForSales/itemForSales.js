import { db } from 'src/lib/db'

export const itemForSales = () => {
  return db.itemForSale.findMany()
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
