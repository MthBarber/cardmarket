import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ItemForSaleForm from 'src/components/ItemForSale/ItemForSaleForm/ItemForSaleForm'
import ItemForSalesCell from 'src/components/ItemForSale/ItemForSalesCell/ItemForSalesCell'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { useAuth } from '@redwoodjs/auth'

const ItemsForSalePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <MetaTags title="ItemsForSale" description="ItemsForSale page" />
      <div className="w-full h-full">
        <Header />
      </div>
      <div className="w-5/6 h-5/6 mb-auto">
        {isAuthenticated ? (
          <ItemForSalesCell userId={currentUser.id} />
        ) : (
          <div>Nothing to show here </div>
        )}
      </div>
      <div>
        <Link to={routes.newItemForSaleForm()}>
          <button className="border-2 border-green-600 bg-green-600 text-white p-2 my-4">
            Add New Items To Sell
          </button>
        </Link>
      </div>
      <div className="absolute mt-8 inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default ItemsForSalePage
