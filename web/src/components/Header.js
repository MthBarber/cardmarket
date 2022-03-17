import { useAuth } from '@redwoodjs/auth'
import React from 'react'
import { Link, routes } from '@redwoodjs/router'

export function Header() {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <nav className=" bg-emerald-600 h-16 text-white flex justify-center items-center font-sans border-b-2 border-black">
      <h1 className="ml-4 text-2xl tracking-wide font-medium uppercase">
        <Link to={routes.home()}>Collectable's Market</Link>
      </h1>
      <ul className="flex ml-auto mr-auto gap-8 mt-auto mb-2 font-medium transition-shadow">
        <li>Cards</li>
        <li>Playmats</li>
        <li>Decks</li>
        <li>Deckboxes</li>
      </ul>
      {isAuthenticated ? (
        <div className="mr-8">
          <span>Logged in as {currentUser.email}</span>{' '}
          <button
            className="border border-black p-1 m-2 rounded-md bg-white text-black"
            type="button"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
    </nav>
  )
}
