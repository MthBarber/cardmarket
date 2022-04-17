import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import OrderHistoryCell from 'src/components/OrderHistoryCell/OrderHistoryCell'

const MyOrdersPage = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <MetaTags title="My Orders" description="MyOrders page" />
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 id="rajdhani" className="text-xl mt-4">
          MyOrdersPage
        </h1>
        <OrderHistoryCell userId={1} />
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </section>
  )
}

export default MyOrdersPage
