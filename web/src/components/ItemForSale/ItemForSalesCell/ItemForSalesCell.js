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
      <p>No itemForSales yet.</p>
      <Link to={routes.newItemForSaleForm()} className="rw-link">
        <p>Create one?</p>
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
              className="flex justify-center items-center w-full sm:w-3/4 h-auto sm:h-auto sm:py-1 md:h-16 mt-8 text-xs lg:text-small 2xl:text-base border-2"
              id="jost"
            >
              <li className="w-1/6 text-center overflow-hidden">
                Card Ref: {itemForSale.cardRef}
              </li>
              <li className="w-2/6 text-center overflow-hidden">
                Card Name: {itemForSale.card.name}
              </li>
              <li className="w-1/6 text-center overflow-hidden">
                Price: £{itemForSale.price.toFixed(2)}
              </li>
              <li className="w-1/6 text-center overflow-hidden">
                Condition: {itemForSale.condition}
              </li>
              <li className="w-1/6 text-center overflow-hidden">
                Status:
                {itemForSale.orderItems.length === 0
                  ? ' Unsold'
                  : itemForSale.orderItems.length > 0 &&
                    itemForSale.orderItems[0].orderItemStatus == ''
                  ? ' Unsold'
                  : ' Sold'}
              </li>
            </ul>
          ))
        : null}
    </div>
  )
}
