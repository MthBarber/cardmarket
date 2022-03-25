import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import ItemForSaleForm from 'src/components/ItemForSale/ItemForSaleForm/ItemForSaleForm'
import NewItemForSale from 'src/components/ItemForSale/NewItemForSale/NewItemForSale'

const NewItemForSaleFormPage = () => {
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
      <div className="w-1/3">
        <NewItemForSale />
        {/* <ItemForSaleForm /> */}
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default NewItemForSaleFormPage
