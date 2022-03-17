import { MetaTags } from '@redwoodjs/web'
import DisplayCardCell from 'src/components/DisplayCardCell/DisplayCardCell'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ListedSellingItemsCell from 'src/components/ListedSellingItemsCell/ListedSellingItemsCell'

const DisplayCardPage = ({ id }) => {
  return (
    <div className="h-full w-screen pb-4 bg-gray-100">
      <Header />
      <MetaTags title="DisplayCard" description="DisplayCard page" />
      <div className="flex justify-center w-2/3 mx-auto mt-6 mb-6 border bg-white">
        <DisplayCardCell id={id} />
      </div>
      <div className="mx-auto mb-36 border-2 border-black flex-grow h-2/3 w-2/3 flex flex-col justify-between bg-white">
        <div className="h-6 w-full flex items-start justify-around bg-white">
          <div className="w-1/5 h-6 border-r border-b  border-black font-semibold text-center">
            Seller Name
          </div>
          <div className="w-1/5 h-6 border-r border-b border-black font-semibold text-center">
            Seller Location
          </div>
          <div className="w-1/5 h-6 border-r border-b border-black font-semibold text-center">
            Condition
          </div>
          <div className="w-1/5 h-6 border-r border-b border-black font-semibold text-center">
            Quantity{' '}
          </div>
          <div className="w-1/5 h-6 text-center border-b border-black font-semibold">
            Price
          </div>
        </div>
        <div className="bg-gray-100 h-full">
          <ListedSellingItemsCell cardId={1} />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 ">
        <Footer />
      </div>
    </div>
  )
}

export default DisplayCardPage
