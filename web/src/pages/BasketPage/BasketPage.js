import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import BasketItemsCell from 'src/components/BasketItemsCell/BasketItemsCell'
import { useAuth } from '@redwoodjs/auth'

const BasketPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <div className="flex flex-col h-full">
      <MetaTags title="Basket" description="Basket page" />
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full h-3/4 flex flex-col justify-center items-center">
        <h1 className="mb-8">Basket Items</h1>
        <div className="border-2 border-grey w-3/4 h-3/4">
          {isAuthenticated ? (
            <BasketItemsCell buyerId={currentUser.id} />
          ) : (
            <div> Nothing to show here </div>
          )}
        </div>
      </div>
      <div className="absolute mt-8 inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default BasketPage
