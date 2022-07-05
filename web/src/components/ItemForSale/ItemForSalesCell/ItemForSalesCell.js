import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
export const QUERY = gql`
  query FindItemForSales($userId: Int!) {
    itemsForSaleUser(userId: $userId) {
      id
      cardRef
      quantity
      price
      condition
      cardId
      userId
      card {
        name
      }
      orderItems {
        orderItemStatus
      }
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

  const [filterState, setFilterState] = useState('no-filter')
  function changeFilterState() {
    setFilterState(document.getElementById('filterState').value)
    console.log('clicked', document.getElementById('filterState').value)
  }
  return (
    <div className="flex flex-col justify-center h-3/4 items-center my-8">
      <h1 className="text-xl" id="rajdhani">
        Listed Items For Sale
      </h1>
      <div className="w-3/4 flex mt-4 justify-end">
        <p className="mr-8">Filter:</p>
        <select id="filterState" onChange={changeFilterState}>
          <option value="sold">Sold</option>
          <option value="not-sold">Not Sold</option>
          <option value="no-filter">Combined</option>
        </select>
      </div>
      {filterState === 'no-filter'
        ? itemsForSaleUser.map((itemForSale) => (
            <ul
              key={itemForSale.id}
              className="flex justify-center items-center w-3/4 h-16 mt-8 border-2"
              id="jost"
            >
              <li className="w-1/6 text-center">
                Card Ref: {itemForSale.cardRef}
              </li>
              <li className="w-1/6 text-center">
                Card Name: {itemForSale.card.name}
              </li>
              <li className="w-1/6 text-center">
                Price: £{itemForSale.price.toFixed(2)}
              </li>
              <li className="w-1/6 text-center">
                Condition: {itemForSale.condition}
              </li>
              <li className="w-1/6 text-center">
                {itemForSale.orderItems.length === 0
                  ? 'Unsold'
                  : itemForSale.orderItems.length > 0 &&
                    itemForSale.orderItems[0].orderItemStatus == ''
                  ? 'Unsold'
                  : 'Sold'}
              </li>
            </ul>
          ))
        : null}
    </div>
  )
}
