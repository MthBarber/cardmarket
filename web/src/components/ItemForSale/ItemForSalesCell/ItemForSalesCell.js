import { Link, routes } from '@redwoodjs/router'

import ItemForSales from 'src/components/ItemForSale/ItemForSales'

export const QUERY = gql`
  query FindItemForSales($userId: Int!) {
    itemsForSaleUser(userId: $userId) {
      name
      quantity
      price
      condition
      cardId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No itemForSales yet. '}
      <Link to={routes.newItemForSale()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ itemsForSaleUser }) => {
  // <ItemForSales {itemForSales} /> original code removed temp to map over itemforsales array
  return (
    <div className="flex flex-col justify-center h-5/6 items-center my-8">
      <h1 className="text-xl" id="rajdhani">
        Listed Items For Sale
      </h1>
      {itemsForSaleUser.map((itemForSale) => (
        <ul
          key={itemForSale.id}
          className="flex justify-center items-center w-3/4 h-16 mt-8 border-2"
          id="jost"
        >
          <li className="w-1/6">{itemForSale.id}</li>
          <li className="w-1/6">{itemForSale.name}</li>
          <li className="w-1/6">{itemForSale.quantity}</li>
          <li className="w-1/6">{itemForSale.price}</li>
          <li className="w-1/6">{itemForSale.condition}</li>
          <li className="w-1/6">{itemForSale.cardId}</li>
          <li className="w-1/6">{itemForSale.userId}</li>
        </ul>
      ))}
    </div>
  )
}
