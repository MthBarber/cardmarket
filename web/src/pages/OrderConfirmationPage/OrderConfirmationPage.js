import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

import DisplayCompletedOrderCell from 'src/components/DisplayCompletedOrderCell/DisplayCompletedOrderCell'
const OrderConfirmationPage = ({ id, currentUserId }) => {
  console.log(id, currentUserId)
  return (
    <div className="h-full w-full flex flex-col items-center">
      <MetaTags
        title="Order Confirmation"
        description="OrderConfirmation page"
      />
      <div className="w-full">
        <Header />
      </div>

      <DisplayCompletedOrderCell id={id} />

      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default OrderConfirmationPage
