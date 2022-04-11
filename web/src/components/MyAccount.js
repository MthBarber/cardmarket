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
            className="border border-black bg-white rounded-md px-1 mx-2 text-black"
            onClick={Toggle}
          >
            My Account
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <button
              id="jost"
              className="border border-black bg-white rounded-md font-medium p-1 mx-2 text-black"
              onClick={Toggle}
            >
              My Account
            </button>
            {/* Drop down menu here */}
            <div className=" bg-gray-100 h-48 w-40 absolute mt-9 rounded-md border-2 border-white mr-4">
              {isAuthenticated ? (
                <ul className="mr-8 h-full w-full flex flex-col justify-between items-center">
                  <Link to={routes.myOrders()}>
                    <li className="mt-4">
                      <button className="border-2 border-gray-600 bg-white rounded-md px-1 mx-2 text-black">
                        My Orders
                      </button>
                    </li>
                  </Link>
                  <li className="flex flex-col items-center mb-4">
                    <span className="text-black" id="rajdhani-400">
                      Logged in as {currentUser.username}
                    </span>{' '}
                    <button
                      className="border-2 h-8 border-gray-600 m-2 w-20 rounded-md bg-white text-black md:shadow-md"
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
        <Link span id="rajdhani-400" to={routes.login()}>
          <button className="mr-8 h-8 w-16 border-2 border-black rounded-md  bg-white text-black">
            Login{' '}
          </button>
        </Link>
      )}
    </>
  )
}
