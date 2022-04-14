import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindDisplayCompletedOrderQuery($id: Int!) {
    displayCompletedOrder: completedOrder(id: $id) {
      id
      userId
      orderItems {
        itemForSale {
          price
          card {
            name
          }
          user {
            username
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

export const Success = ({ displayCompletedOrder }) => {
  const { currentUser } = useAuth()
  let keyNum = 0
  let total = 0
  displayCompletedOrder.orderItems.map((item) => {
    total += item.itemForSale.price
  })
  return (
    <section className="h-full w-3/4">
      {currentUser.id === displayCompletedOrder.userId ? (
        <div className="h-full w-full flex flex-col items-center">
          <h1 id="rajdhani" className="mt-8 text-2xl">
            Order Complete!
          </h1>
          <h4 id="rajdhani" className="mb-8">
            Your Order Number: #{displayCompletedOrder.id}
          </h4>
          <div
            id="jost"
            className="h-3/4 w-3/4 flex-col border border-gray-600 flex"
          >
            <ul className="w-full flex justify-around border-b border-gray-600">
              <li className="w-1/4 text-center">Item Name</li>
              <li className="w-1/4 text-center">Seller</li>
              <li className="w-1/4 text-center">Quantity</li>
              <li className="w-1/4 text-center">Price</li>
            </ul>
            <section className="w-full">
              {displayCompletedOrder.orderItems.map((item) => {
                return (
                  <ul key={(keyNum += 1)} className=" w-full flex">
                    <li className="w-1/4 text-center">
                      {item.itemForSale.card.name}
                    </li>
                    <li className="w-1/4 text-center">
                      {' '}
                      {item.itemForSale.user.username}{' '}
                    </li>
                    <li className="w-1/4 text-center"> 1</li>
                    <li className="w-1/4 pl-28">
                      £{item.itemForSale.price.toFixed(2)}
                    </li>
                  </ul>
                )
              })}
            </section>
            <div className="ml-auto mr-24">Total: £{total.toFixed(2)}</div>
          </div>
          <p id="rajdhani" className="mt-8 text-lg">
            Thanks for your order! Hope to see you again soon.
          </p>
        </div>
      ) : (
        <div className="mt-8 text-xl flex flex-col items-center">
          <p className="mb-12">You do not have permission to view this.</p>
          <button className=" w-24 h-8 border border-black rounded-md bg-emerald-500 text-sm text-white">
            <Link to={routes.home()}>Return home</Link>
          </button>
        </div>
      )}
    </section>
  )
}
