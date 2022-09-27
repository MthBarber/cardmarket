import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  # query FindOrderHistoryQuery($id: Int!) {
  #   orderHistory: user(id: $id) {
  #     id
  #     orderItems {
  #       itemForSaleId
  #       itemForSale {
  #         card {
  #           name
  #         }
  #       }
  #     }
  #   }
  # }
  query FindOrderHistoryQuery($userId: Int!) {
    orderHistory: completedOrderUser(userId: $userId) {
      id
      orderItems {
        itemForSale {
          condition
          card {
            name
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="mt-16 text-lg">
    <p>Doesn't look like you've purchased anything, why not browse!</p>
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

export const Success = ({ orderHistory }) => {
  console.log(orderHistory)
  return (
    // <div>{JSON.stringify(orderHistory)}</div>
    <div className="flex flex-col justify-center items-center overflow-y-scroll w-full mb-4">
      {orderHistory.map((item) => {
        return (
          <ul
            id="jost"
            key={item.id}
            className="border border-gray-600 w-11/12 md:w-3/4 m-2"
          >
            <li id="rajdhani" className="pl-4 flex justify-between w-full py-2">
              <span> Order Number: #{item.id}</span>
              <span className="mr-4 ">
                <Link to={routes.viewCompletedOrder({ id: item.id })}>
                  <button className="2xl:ml-auto border w-16 text-xs sm:text-base sm:w-24 border-green-500 font-bold bg-green-500 text-white">
                    View Order
                  </button>
                </Link>
              </span>
            </li>
            <li>
              {item.orderItems.map((item) => {
                return (
                  <span
                    key={item.id}
                    className="text-xs sm:text-base py-2 sm:py-0 flex justify-around"
                  >
                    <li className="pl-4 w-1/3 ">
                      {item.itemForSale.card.name}
                    </li>
                    <li className="w-1/3 text-center">
                      {item.itemForSale.condition}
                    </li>
                    <li className="w-1/3 text-center">Quantity: 1 </li>
                  </span>
                )
              })}
            </li>
          </ul>
        )
      })}
    </div>
  )
}
