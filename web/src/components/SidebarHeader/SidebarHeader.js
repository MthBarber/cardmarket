import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { MyAccount } from 'src/components/MyAccount'
import BasketIconCell from 'src/components/BasketIconCell/BasketIconCell'
// import hamburgerIcon from '../assets/hamburgerIcon'

const SidebarHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  function Toggle() {
    console.log('clicked')
    setIsOpen(!isOpen)
  }
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <div>
      {isOpen === false ? (
        <button onClick={Toggle} className="border border-gray-600">
          {/* <img src={hamburgerIcon}></img> */}
          Hamburger menu
        </button>
      ) : (
        <menu className="flex flex-col justify-around items-center w-60 h-60 bg-red-600 mt-52">
          <button onClick={Toggle} className="flex justify-end">
            X
          </button>
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
      )}
    </div>
  )
}

export { SidebarHeader }
