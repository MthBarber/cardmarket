import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
export function MyAccount() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { isAuthenticated, currentUser, logOut } = useAuth()
  function Toggle() {
    console.log('clicked')
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isAuthenticated ? (
        isOpen == false ? (
          <button
            id="jost"
            className="border lg:w-24 lg:h-6 lg:text-sm border-black bg-white rounded-md px-2 mx-2 text-black"
            onClick={Toggle}
          >
            My Account
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <button
              id="jost"
              className="border lg:w-24 lg:h-6 lg:text-sm border-black bg-white rounded-md px-2 mx-2 text-black"
              onClick={Toggle}
            >
              My Account
            </button>
            {/* Drop down menu here */}
            <div className=" bg-white h-56 w-40 absolute mt-9 rounded-md border border-black mr-4">
              {isAuthenticated ? (
                <ul className="mr-8 h-full w-full flex flex-col justify-between items-center">
                  <Link to={routes.myOrders()}>
                    <li className="mt-4">
                      <button className="border-2 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                        My Orders
                      </button>
                    </li>
                  </Link>
                  <Link to={routes.itemsForSale()}>
                    <li className="mt-4">
                      <button className="border-2 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                        Listed Items
                      </button>
                    </li>
                  </Link>
                  <Link to={routes.newItemForSaleForm()}>
                    <li className="mt-4">
                      <button className="border-2 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                        Sell Cards
                      </button>
                    </li>
                  </Link>
                  <li className="flex flex-col items-center my-4">
                    <span
                      className="text-black text-l font-bold"
                      id="rajdhani-400"
                    >
                      Logged in as {currentUser.username}
                    </span>
                    <button
                      className="border-2 h-8 border-red-600 m-2 w-20 rounded-md bg-red-600 text-white font-semibold md:shadow-md hover:border-red-800 hover:bg-red-800"
                      type="button"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        )
      ) : (
        <Link span id="jost" to={routes.login()}>
          <button className="px-2 lg:w-14 lg:h-6 lg:text-sm 2xl:w-20 2xl:h-8 text-black bg-white mx-8 border border-gray-600 rounded-md">
            Login{' '}
          </button>
        </Link>
      )}
    </>
  )
}
