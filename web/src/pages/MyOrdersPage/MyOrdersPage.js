import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

const MyOrdersPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <MetaTags title="My Orders" description="MyOrders page" />
      <Header />

      <h1>MyOrdersPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyOrdersPage/MyOrdersPage.js</code>
      </p>
      <p>
        My default route is named <code>myOrders</code>, link to me with `
        <Link to={routes.myOrders()}>MyOrders</Link>`
      </p>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default MyOrdersPage
