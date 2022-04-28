import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ViewCompletedOrderCell from 'src/components/ViewCompletedOrderCell/ViewCompletedOrderCell'

const ViewCompletedOrderPage = ({ id }) => {
  const orderId = parseInt(id)
  return (
    <>
      <MetaTags
        title="ViewCompletedOrder"
        description="ViewCompletedOrder page"
      />
      <Header />
      <h1>ViewCompletedOrderPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/ViewCompletedOrderPage/ViewCompletedOrderPage.js
        </code>
        <p>{JSON.stringify(id) + typeof id}</p>
      </p>
      <ViewCompletedOrderCell id={orderId} />

      <div className="absolute bottom-0">
        <Footer />
      </div>
    </>
  )
}

export default ViewCompletedOrderPage
