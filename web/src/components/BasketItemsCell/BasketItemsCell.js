import { RemoveFromBasketButton } from 'src/components/RemoveFromBasketButton'
import { CompletePurchaseButton } from 'src/components/CompletePurchaseButton'
import { Link, routes } from '@redwoodjs/router'
export { QUERY as ItemsInBasketQuery }

export const QUERY = gql`
  query BasketItemsQuery($buyerId: Int!) {
    itemsInBasket: basketOrderItems(buyerId: $buyerId) {
      id
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

export const Empty = () => (
  <div className="flex flex-col items-center mt-8">
    <p>Your basket is empty</p>
    <Link to={routes.home()}>
      <button className="mt-8 bg-green-500 border-green-500 px-2 py-2 text-white">
        Return to the homepage
      </button>
    </Link>
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ itemsInBasket }) => {
  let totalCost = 0
  return (
    <div className="flex flex-col h-full justify-start gap-y-5">
      <ul className="h-5/6 w-full flex flex-col justify-start items-center ">
        {itemsInBasket.map((item) => {
          if (item.orderItemStatus == 'InBasket') {
            {
              totalCost += item.itemForSale.price
            }
            return (
              <span
                className="w-full h-8 text-xs sm:text-sm md:text-lg flex justify-around items-center border-b border-black"
                key={item.itemForSale.id}
              >
                <li className="h-8 text-xs sm:text-sm md:text-lg w-1/4 text-center flex flex-col justify-center">
                  {item.itemForSale.card.name}
                </li>
                <li className="h-8 text-xs sm:text-sm md:text-lg w-1/4 text-center flex flex-col justify-center">
                  {item.itemForSale.condition}
                </li>
                <li className="h-8 text-xs sm:text-sm md:text-lg w-1/4 text-center flex flex-col justify-center">
                  1
                </li>
                <li className="h-8 text-xs sm:text-sm md:text-lg w-1/4 text-center flex flex-col justify-center">
                  £{item.itemForSale.price.toFixed(2)}
                </li>
                <li className="h-8 text-xs sm:text-sm md:text-lg text-center flex flex-col justify-center mr-2">
                  <RemoveFromBasketButton itemId={item.id} />
                </li>
              </span>
            )
          } else {
            return null
          }
        })}
      </ul>
      <div className="flex justify-end self-end ">
        <span className=" w-48 mb-4 pl-16 sm:pr-4 lg:pr-8 2xl:pr-16 text-xs sm:text-sm md:text-lg flex justify-center text-center">
          Total: £{totalCost.toFixed(2)}
        </span>
      </div>
      <div className="w-full flex justify-end md:mt-2">
        <CompletePurchaseButton completeBasketItems={itemsInBasket} />
      </div>
    </div>
  )
}
