import { useAuth } from '@redwoodjs/auth'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import BasketIconCell from 'src/components/BasketIconCell/BasketIconCell'

export function Header() {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <nav className=" bg-emerald-600 h-16 text-white flex justify-center items-center font-sans border-b-2 border-black">
      <h1
        id="rajdhani"
        className="ml-4 text-2xl tracking-wide font-medium uppercase"
      >
        <Link to={routes.home()}>Collectable's Market</Link>
      </h1>
      <ul
        id="rajdhani"
        className="flex ml-auto mr-32 gap-8 mt-auto mb-2 font-medium transition-shadow"
      >
        <li>Cards</li>
        <li>Playmats</li>
        <li>Decks</li>
        <li>Deckboxes</li>
      </ul>
      <div className="ml-4">
        <Link to={routes.itemsForSale()}>
          <button
            id="jost"
            className="w-32 h-8 flex justify-around items-center text-black bg-white mx-8 border-2 border-gray-600 rounded-md"
          >
            Your Listed Items
          </button>
        </Link>
      </div>
      <Link to={routes.basket()}>
        <div id="jost" className="mx-8 ">
          <button className="w-20 h-8 flex justify-around items-center text-black bg-white mx-8 border-2 border-gray-600 rounded-md">
            Basket{' '}
            {isAuthenticated ? (
              <BasketIconCell buyerId={currentUser.id} />
            ) : (
              <span></span>
            )}
          </button>
        </div>
      </Link>
      {isAuthenticated ? (
        <div className="mr-8">
          <span id="rajdhani-400">Logged in as {currentUser.username}</span>{' '}
          <button
            className="border-2 h-8 border-gray-600   m-2 w-20 rounded-md bg-white text-black md:shadow-md"
            type="button"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link span id="rajdhani-400" to={routes.login()}>
          <button className="mr-8 h-8 border-2 border-black rounded-md  bg-white text-black">
            Login{' '}
          </button>
        </Link>
      )}
    </nav>
  )
}
