import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import BasketIconCell from 'src/components/BasketIconCell/BasketIconCell'
import hamburgerIcon from 'src/assets/hamburgerIcon.png'

const SidebarHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  function Toggle() {
    console.log('clicked')
    setIsOpen(!isOpen)
  }
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div>
      {isOpen === false ? (
        <button onClick={Toggle} className="border border-gray-600">
          <img className="h-6 w-6" src={hamburgerIcon} alt="hamburgerIcon" />
        </button>
      ) : (
        <div className="">
          <button onClick={Toggle} className="border border-gray-600">
            <img className="h-6 w-6" src={hamburgerIcon} alt="hamburgerIcon" />
          </button>
          <menu className="absolute flex flex-col justify-around items-center top-20 w-52 h-68 text-black bg-white border border-black rounded-md ">
            <button onClick={Toggle} className="ml-48 mr-4">
              X
            </button>
            <Link to={routes.basket()}>
              <div>
                <button className="border-2 w-28 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                  Basket{' '}
                  {isAuthenticated ? (
                    <BasketIconCell buyerId={currentUser.id} />
                  ) : (
                    <span></span>
                  )}
                </button>
              </div>
            </Link>
            <Link to={routes.myOrders()}>
              <li className="mt-4">
                <button className="border-2 w-28 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                  My Orders
                </button>
              </li>
            </Link>
            <Link to={routes.itemsForSale()}>
              <li className="mt-4">
                <button className="border-2 w-28 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                  Listed Items
                </button>
              </li>
            </Link>
            <Link to={routes.newItemForSaleForm()}>
              <li className="mt-4">
                <button className="border-2 w-28 border-purple-600 bg-purple-600 rounded-md px-1 mx-2 text-white font-semibold hover:border-purple-900 hover:bg-purple-900">
                  Sell Cards
                </button>
              </li>
            </Link>
            {isAuthenticated ? (
              <li className="flex flex-col items-center my-4">
                <span className="text-black text-l font-bold" id="rajdhani-400">
                  Logged in as {currentUser.username}
                </span>
                <button
                  className="border-2 h-8 w-28 border-red-600 m-2 rounded-md bg-red-600 text-white font-semibold md:shadow-md hover:border-red-800 hover:bg-red-800"
                  type="button"
                  onClick={logOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <Link span id="rajdhani-400" to={routes.login()}>
                <button className="border-2 h-8 w-28 border-emerald-600 m-2 rounded-md bg-emerald-600 text-white font-semibold md:shadow-md hover:bg-emerald-800 hover:border-emerald-800">
                  Login{' '}
                </button>
              </Link>
            )}
          </menu>
        </div>
      )}
    </div>
  )
}

export { SidebarHeader }
