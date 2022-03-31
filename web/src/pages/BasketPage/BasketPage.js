import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import BasketItemsCell from 'src/components/BasketItemsCell/BasketItemsCell'
import { useAuth } from '@redwoodjs/auth'

const BasketPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100">
      <MetaTags title="Basket" description="Basket page" />
      <div className="w-full bg-white">
        <Header />
      </div>
      <div className="w-3/4 h-full flex flex-col justify-start items-center bg-white mt-4 mb-20">
        <h1 id="rajdhani" className="mb-6 mt-8 text-2xl">
          Basket Items
        </h1>
        <div
          id="jost"
          className="border-2  w-3/4 h-2/3  flex flex-col justify-start"
        >
          {isAuthenticated ? (
            <div className="h-full">
              <div className="flex justify-around  mb-2">
                <span>Name</span>
                <span>Condition</span>
                <span>Quantity</span>
                <span>Price</span>
              </div>
              <div className="border-t h-full flex flex-col justify-between">
                <BasketItemsCell buyerId={currentUser.id} />
              </div>
            </div>
          ) : (
            <div> Nothing to show here </div>
          )}
        </div>
        <div className="w-3/4 flex justify-end mt-2">
          <button className="border-2 bg-green-500 border-green-500 flex justify-end px-2">
            Complete Purchase
          </button>
        </div>
      </div>

      <div className="absolute mt-8 inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default BasketPage
