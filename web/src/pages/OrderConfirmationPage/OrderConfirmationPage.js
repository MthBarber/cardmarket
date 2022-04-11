import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OrderConfirmationPage = () => {
  return (
    <>
      <MetaTags
        title="Order Confirmation"
        description="OrderConfirmation page"
      />

      <h1>OrderConfirmationPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/OrderConfirmationPage/OrderConfirmationPage.js
        </code>
      </p>
      <p>
        My default route is named <code>orderConfirmation</code>, link to me
        with `<Link to={routes.orderConfirmation()}>OrderConfirmation</Link>`
      </p>
    </>
  )
}

export default OrderConfirmationPage
