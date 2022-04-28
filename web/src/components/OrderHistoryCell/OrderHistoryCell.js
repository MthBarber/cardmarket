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

export const Empty = () => <div>Empty</div>

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
            className="border border-gray-600 w-1/3 m-2"
          >
            <li id="rajdhani" className="pl-4 w-full">
              <span> Order Number: #{item.id}</span>
              <span className="ml-96 mt-4">
                <Link to={routes.viewCompletedOrder({ id: item.id })}>
                  <button className="ml-auto border w-24 border-green-500 bg-green-500 text-white">
                    View Order
                  </button>
                </Link>
              </span>
            </li>
            <li>
              {item.orderItems.map((item) => {
                return (
                  <span key={item.id} className="flex justify-around">
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
