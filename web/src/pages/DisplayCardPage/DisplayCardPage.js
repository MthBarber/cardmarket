import { MetaTags } from '@redwoodjs/web'
import DisplayCardCell from 'src/components/DisplayCardCell/DisplayCardCell'
import { Header } from 'src/components/Header'

const DisplayCardPage = ({ id }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <MetaTags title="DisplayCard" description="DisplayCard page" />
      <div className="flex justify-center">
        <DisplayCardCell id={id} />
      </div>
      {/* <Link to={routes.displayCard()}>DisplayCard</Link>` */}
      <div className="mx-auto border-2 border-black h-1/3 w-3/4 flex  justify-around">
        <div className="w-1/4 h-6 border-r border-b border-black text-center">
          Seller Name
        </div>
        <div className="w-1/4 h-6 border-r border-b border-black text-center">
          Quantity{' '}
        </div>
        <div className="w-1/4 h-6 border-r border-b border-black text-center">
          Condition
        </div>
        <div className="w-1/4 h-6 text-center border-b border-black">Price</div>
      </div>
    </div>
  )
}

export default DisplayCardPage
