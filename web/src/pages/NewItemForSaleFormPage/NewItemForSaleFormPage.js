import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewItemForSaleFormPage = () => {
  return (
    <>
      <MetaTags
        title="NewItemForSaleForm"
        description="NewItemForSaleForm page"
      />

      <h1>NewItemForSaleFormPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/NewItemForSaleFormPage/NewItemForSaleFormPage.js
        </code>
      </p>
      <p>
        My default route is named <code>newItemForSaleForm</code>, link to me
        with `<Link to={routes.newItemForSaleForm()}>NewItemForSaleForm</Link>`
      </p>
    </>
  )
}

export default NewItemForSaleFormPage
