// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import CardsLayout from 'src/layouts/CardsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CardsLayout}>
        <Route path="/cards/new" page={CardNewCardPage} name="newCard" />
        <Route path="/cards/{id:Int}/edit" page={CardEditCardPage} name="editCard" />
        <Route path="/cards/{id:Int}" page={CardCardPage} name="card" />
        <Route path="/cards" page={CardCardsPage} name="cards" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
