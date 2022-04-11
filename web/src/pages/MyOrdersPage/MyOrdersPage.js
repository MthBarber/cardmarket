import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

const MyOrdersPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <MetaTags title="MyOrders" description="MyOrders page" />

      <h1>MyOrdersPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyOrdersPage/MyOrdersPage.js</code>
      </p>
      <p>
        My default route is named <code>myOrders</code>, link to me with `
        <Link to={routes.myOrders()}>MyOrders</Link>`
      </p>
      <Footer />
    </div>
  )
}

export default MyOrdersPage
