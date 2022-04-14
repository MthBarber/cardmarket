import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import DisplayCompletedOrderCell from 'src/components/DisplayCompletedOrderCell/DisplayCompletedOrderCell'
const OrderConfirmationPage = ({ id }) => {
  // console.log('id here is', id)
  return (
    <div className="h-full w-full flex flex-col">
      <MetaTags
        title="Order Confirmation"
        description="OrderConfirmation page"
      />
      <Header />
      <section className=" h-full w-3/4 flex flex-col items-center">
        <h1>Order Complete!</h1>
        <h4>Your Order Number: #{id}</h4>
        <div className="w-full">
          <DisplayCompletedOrderCell id={id} />
        </div>
      </section>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default OrderConfirmationPage
