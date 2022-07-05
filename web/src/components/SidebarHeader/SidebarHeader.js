import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { MyAccount } from 'src/components/MyAccount'
import BasketIconCell from 'src/components/BasketIconCell/BasketIconCell'

const SidebarHeader = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <menu className="w-60 h-60 bg-red-600">
      <span className="flex justify-end">X</span>
      <Link to={routes.itemsForSale()}>
        <button
          id="jost"
          className="w-32 h-8 flex justify-around items-center text-black bg-white mx-20 border-2 border-gray-600 rounded-md"
        >
          Your Listed Items
        </button>
      </Link>
      <Link to={routes.basket()}>
        <div id="jost" className="mx-12 ">
          <button className="w-20 h-8 flex justify-around items-center text-black bg-white mx-8 border-2 border-gray-600 rounded-md">
            Basket{' '}
            {isAuthenticated ? (
              <BasketIconCell buyerId={currentUser.id} />
            ) : (
              <span></span>
            )}
          </button>
        </div>
        <div className="mr-8">
          <MyAccount />
        </div>
      </Link>
    </menu>
  )
}

export { SidebarHeader }
