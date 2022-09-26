import { MetaTags } from '@redwoodjs/web'
import DisplayCardCell from 'src/components/DisplayCardCell/DisplayCardCell'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ListedSellingItemsCell from 'src/components/ListedSellingItemsCell/ListedSellingItemsCell'
import React from 'react'

const DisplayCardPage = ({ id }) => {
  // const [orderPopupState, changeOrderPopupState] = React.useState(false)
  // function PopupStateChange() {
  //   changeOrderPopupState((prevState) => !prevState)
  // }
  return (
    <div className="h-full w-screen bg-gray-100">
      <Header />
      <MetaTags title="DisplayCard" description="DisplayCard page" />
      <div className="flex md:flex-row justify-center w-2/3 mx-auto mt-6 mb-6 border bg-white">
        <DisplayCardCell id={id} />
      </div>
      <div className="mx-auto mb-36 border-2 border-black flex-grow h-2/3 w-full sm:w-2/3 flex flex-col justify-between bg-white">
        <div
          id="text-gray"
          className=" h-auto md:h-6 w-full flex items-start justify-start text-xs sm:text-sm md:text-base bg-white"
        >
          <div className="w-1/5 h-10 md:h-6 border-r border-b sm:pt-4 md:pt-0 border-black font-semibold text-center">
            Seller Name
          </div>
          <div className="w-1/5 h-10 md:h-6 border-r border-b  border-black font-semibold text-center">
            Seller Location
          </div>
          <div className="w-1/5 h-10 md:h-6 border-r border-b pt-4 md:pt-0 border-black font-semibold text-center">
            Condition
          </div>
          {/* <div className="w-1/5 h-10 md:h-6 border-r border-b pt-4 md:pt-0 border-black font-semibold text-center">
            Quantity{' '}
          </div> */}
          <div className="w-1/5 h-10 md:h-6 text-center border-b pt-4 md:pt-0 border-black border-r font-semibold">
            Price
          </div>
          <div className="w-1/5 h-10 md:h-6 border-b pt-4 md:pt-0 text-center border-black font-semibold">
            Availability
          </div>
        </div>
        <div className="bg-gray-100 h-full">
          <ListedSellingItemsCell cardId={id} />
        </div>
      </div>
      <div className="absolute lg:relative pt-4 bottom-0 ">
        <Footer />
      </div>
    </div>
  )
}

export default DisplayCardPage
