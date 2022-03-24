import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ItemForSaleForm from 'src/components/ItemForSale/ItemForSaleForm'

export const QUERY = gql`
  query EditItemForSaleById($id: Int!) {
    itemForSale: itemForSale(id: $id) {
      id
      name
      quantity
      price
      condition
      cardId
      userId
    }
  }
`
const UPDATE_ITEM_FOR_SALE_MUTATION = gql`
  mutation UpdateItemForSaleMutation(
    $id: Int!
    $input: UpdateItemForSaleInput!
  ) {
    updateItemForSale(id: $id, input: $input) {
      id
      name
      quantity
      price
      condition
      cardId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ itemForSale }) => {
  const [updateItemForSale, { loading, error }] = useMutation(
    UPDATE_ITEM_FOR_SALE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ItemForSale updated')
        navigate(routes.itemForSales())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      cardId: parseInt(input.cardId),
      userId: parseInt(input.userId),
    })
    updateItemForSale({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ItemForSale {itemForSale.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ItemForSaleForm
          itemForSale={itemForSale}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
