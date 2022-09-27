import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import OrderHistoryCell from 'src/components/OrderHistoryCell/OrderHistoryCell'
import { useAuth } from '@redwoodjs/auth'

const MyOrdersPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <section className="w-full h-full min-h-screen flex flex-col">
      <MetaTags title="My Orders" description="MyOrders page" />
      <Header />

      <div className="flex flex-col justify-center items-center">
        <h1 id="rajdhani" className="text-xl mt-4">
          Order History
        </h1>
        {isAuthenticated ? (
          <OrderHistoryCell userId={currentUser.id} />
        ) : (
          <p className="mt-8"> Please login to your account</p>
        )}
      </div>
      <div className="absolute lg:relative mt-auto bottom-0">
        <Footer />
      </div>
    </section>
  )
}

export default MyOrdersPage
