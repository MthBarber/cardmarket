export const QUERY = gql`
  query BasketItemsQuery($buyerId: Int!) {
    itemsInBasket: basketOrderItems(buyerId: $buyerId) {
      buyerId
      orderItemStatus
      itemForSale {
        id
        condition
        price
        card {
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ itemsInBasket }) => {
  return (
    <ul className="h-3/4 w-full flex flex-col justify-center items-center">
      {itemsInBasket.map((item) => {
        return (
          <span
            className="w-full flex justify-around"
            key={item.itemForSale.id}
          >
            <li className="h-12 w-1/4 text-center">
              Name: {item.itemForSale.card.name}
            </li>
            <li className="h-12 w-1/4 text-center">
              Condition: {item.itemForSale.condition}
            </li>
            <li className="h-12 w-1/4 text-center">Quantity: 1</li>
            <li className="h-12 w-1/4 text-center">
              Price: £{item.itemForSale.price}
            </li>
          </span>
        )
      })}
    </ul>
  )
}
