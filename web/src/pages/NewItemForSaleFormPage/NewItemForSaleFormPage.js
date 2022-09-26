import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ItemForSaleForm from 'src/components/ItemForSale/ItemForSaleForm/ItemForSaleForm'
import NewItemForSale from 'src/components/ItemForSale/NewItemForSale/NewItemForSale'
import { useAuth } from '@redwoodjs/auth'

const NewItemForSaleFormPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className="flex flex-col items-center h-full w-full ">
      <div className="w-full">
        <Header />
      </div>
      <MetaTags
        title="NewItemForSaleForm"
        description="NewItemForSaleForm page"
      />
      <h1 id="rajdhani" className="my-4">
        Add New Item To Your Selling List
      </h1>
      <div className="w-11/12 sm:w-1/2 lg:w-1/3 mb-2">
        <NewItemForSale currentUser={currentUser.id} />
        {/* <ItemForSaleForm /> */}
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default NewItemForSaleFormPage
