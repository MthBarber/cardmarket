import React from 'react'

import { AddToBasketButton } from 'src/components/AddToBasketButton'

export const QUERY = gql`
  query ListedSellingItemsQuery($cardId: Int!) {
    listedSellingItems: cardListingItemsForSale(cardId: $cardId) {
      id
      cardRef
      quantity
      price
      condition
      user {
        username
        location
      }
      orderItems {
        id
        orderItemStatus
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="text-center bg-white">No items available for sale</div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ listedSellingItems }) => {
  // console.log('Listed sellingItems', listedSellingItems)
  let sortedSellingItemsArray = []
  listedSellingItems.forEach((item) => sortedSellingItemsArray.push(item))

  sortedSellingItemsArray.sort((a, b) => a.price - b.price)

  return (
    <div id="jost" className="flex flex-col justify-start bg-white">
      {sortedSellingItemsArray.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full flex justify-around items-center border-b border-black"
          >
            <span className="w-1/5 h-8 flex items-center justify-center text-center">
              {item.user.username}
            </span>
            <span className="w-1/5 h-8 flex items-center justify-center text-center">
              {item.user.location}
            </span>
            <span className="w-1/5 h-8 flex items-center justify-center text-center">
              {item.condition}
            </span>
            <span className="w-1/5 h-8 flex items-center justify-center text-center">
              £{item.price.toFixed(2)}
            </span>
            <span className="w-1/5 h-8 flex items-center justify-center text-center">
              <AddToBasketButton item={item} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
