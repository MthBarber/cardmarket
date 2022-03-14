import React from 'react'
import { Link, routes } from '@redwoodjs/router'

export function Header() {
  return (
    <nav className=" bg-yellow-300 h-16 text-white flex justify-center items-center font-sans">
      <h1 className="ml-4 text-2xl tracking-wide font-medium uppercase">
        <Link to={routes.home()}>Collectable's Market</Link>
      </h1>
      <ul className="flex ml-auto mr-auto gap-8 mt-auto font-medium transition-shadow">
        <li>Cards</li>
        <li>Playmats</li>
        <li>Decks</li>
        <li>Deckboxes</li>
      </ul>
    </nav>
  )
}
