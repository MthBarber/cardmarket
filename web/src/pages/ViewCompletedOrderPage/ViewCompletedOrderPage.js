import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Link, routes } from '@redwoodjs/router'
import ViewCompletedOrderCell from 'src/components/ViewCompletedOrderCell/ViewCompletedOrderCell'

const ViewCompletedOrderPage = ({ id }) => {
  return (
    <div className="w-full h-full">
      <MetaTags
        title="ViewCompletedOrder"
        description="ViewCompletedOrder page"
      />
      <Header />
      <Link to={routes.myOrders()}>
        <button
          id="jost"
          className="ml-4 mt-2 w-24 border-2-purple-700 bg-purple-700 text-white text-bold"
        >
          My Orders
        </button>
      </Link>
      <section className="h-full flex justify-center items-center">
        <ViewCompletedOrderCell id={parseInt(id)} />
      </section>
      <section className="absolute bottom-0">
        <Footer />
      </section>
    </div>
  )
}

export default ViewCompletedOrderPage
