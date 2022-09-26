import { useAuth } from '@redwoodjs/auth'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import BasketIconCell from 'src/components/BasketIconCell/BasketIconCell'
import { MyAccount } from 'src/components/MyAccount'
import { SidebarHeader } from 'src/components/SidebarHeader/SidebarHeader'

export function Header() {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <nav className="bg-emerald-600 h-16 text-white flex md:justify-center justify-start items-center font-sans border-b-2 border-black">
      <div className="ml-4 md:hidden  my-auto">
        <SidebarHeader />
      </div>
      <h1
        id="rajdhani"
        className="ml-4 mr-auto text-2xl tracking-wide font-medium uppercase"
      >
        <Link to={routes.home()}>MTG Marketplace</Link>
      </h1>
      {/* <ul
        id="rajdhani"
        className="lg:flex hidden mx-auto md:ml-auto md:mr-auto md:justify-self-center md:gap-8 md:mt-auto md:mb-2 md:text-sm md:font-medium md:transition-shadow"
      >
        <li>Cards</li>
        <li>Playmats</li>
        <li>Decks</li>
        <li>Deckboxes</li>
      </ul> */}
      <div className="md:ml-4 hidden">
        <Link to={routes.itemsForSale()}>
          <button
            id="jost"
            className="w-32 md:block h-8 flex justify-around items-center text-black bg-white mx-20 border-2 border-gray-600 rounded-md"
          >
            Your Listed Items
          </button>
        </Link>
      </div>
      <Link to={routes.basket()}>
        <div id="jost" className="mx-12 hidden md:block">
          <button className="px-2 lg:w-20 lg:h-6 lg:text-sm 2xl:w-20 2xl:h-6 flex justify-around items-center text-black text-center bg-white mx-8 border border-gray-600 rounded-md">
            Basket{' '}
            {isAuthenticated ? (
              <BasketIconCell buyerId={currentUser.id} />
            ) : (
              <span></span>
            )}
          </button>
        </div>
      </Link>
      <div className="mr-8 hidden md:block">
        <MyAccount />
      </div>
    </nav>
  )
}
