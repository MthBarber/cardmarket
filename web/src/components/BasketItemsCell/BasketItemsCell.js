import { RemoveFromBasketButton } from 'src/components/RemoveFromBasketButton'

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
              className="w-full h-8 flex justify-around items-center border-b border-black"
              key={item.itemForSale.id}
            >
              <li className="h-8 w-1/4 text-center flex flex-col justify-center">
                {item.itemForSale.card.name}
              </li>
              <li className="h-8 w-1/4 text-center flex flex-col justify-center">
                {item.itemForSale.condition}
              </li>
              <li className="h-8 w-1/4 text-center flex flex-col justify-center">
                1
              </li>
              <li className="h-8 w-1/4 text-center flex flex-col justify-center">
                £{item.itemForSale.price.toFixed(2)}
              </li>
              <li className="h-8 text-center flex flex-col justify-center mr-2">
                <RemoveFromBasketButton itemId={item.itemForSale.id} />
              </li>
            </span>
          )
        })}
      </ul>
      <div className="flex justify-end self-end ">
        <span className=" w-48 mb-4  pr-16  flex justify-center text-center">
          Total: £{totalCost.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
