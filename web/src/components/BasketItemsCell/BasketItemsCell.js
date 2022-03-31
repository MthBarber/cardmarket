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
  let totalCost = 0
  return (
    <div className="flex flex-col h-full justify-start gap-y-5">
      <ul className="h-5/6 w-full flex flex-col justify-start items-center ">
        {itemsInBasket.map((item) => {
          {
            totalCost += item.itemForSale.price
          }
          return (
            <span
              className="w-full h-12 flex justify-around"
              key={item.itemForSale.id}
            >
              <li className="h-12 w-1/4 text-center">
                {item.itemForSale.card.name}
              </li>
              <li className="h-12 w-1/4 text-center">
                {item.itemForSale.condition}
              </li>
              <li className="h-12 w-1/4 text-center">1</li>
              <li className="h-12 w-1/4 text-center">
                £{item.itemForSale.price.toFixed(2)}
              </li>
            </span>
          )
        })}
      </ul>
      <div className="flex justify-end self-end ">
        <span className=" w-36 border-t border-l pr-4 flex justify-center text-center">
          Total: £{totalCost.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
