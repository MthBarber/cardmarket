import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ViewCompletedOrderCell from 'src/components/ViewCompletedOrderCell/ViewCompletedOrderCell'

const ViewCompletedOrderPage = ({ id }) => {
  return (
    <div className="w-full h-full">
      <MetaTags
        title="ViewCompletedOrder"
        description="ViewCompletedOrder page"
      />
      <Header />
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
