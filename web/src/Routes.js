// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Set, Router, Route } from '@redwoodjs/router'
import CardsLayout from 'src/layouts/CardsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/display-card/{id:Int}" page={DisplayCardPage} name="displayCard" />
      <Private unauthenticared="home">
        <Set wrap={CardsLayout}>
          <Route path="/cards/new" page={CardNewCardPage} name="newCard" />
          <Route path="/cards/{id:Int}/edit" page={CardEditCardPage} name="editCard" />
          <Route path="/cards/{id:Int}" page={CardCardPage} name="card" />
          <Route path="/cards" page={CardCardsPage} name="cards" />
        </Set>
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
