import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ItemForSaleForm from 'src/components/ItemForSale/ItemForSaleForm'

const CREATE_ITEM_FOR_SALE_MUTATION = gql`
  mutation CreateItemForSaleMutation($input: CreateItemForSaleInput!) {
    createItemForSale(input: $input) {
      cardRef
      quantity
      price
      condition
      cardId
      userId
    }
  }
`

const NewItemForSale = (currentUser) => {
  const [createItemForSale, { loading, error }] = useMutation(
    CREATE_ITEM_FOR_SALE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ItemForSale created')
        navigate(routes.itemsForSale())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      cardId: parseInt(input.cardId),
      userId: currentUser.currentUser,
    })
    createItemForSale({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary ">Card Specifics</h2>
      </header>
      <div className="rw-segment-main">
        <ItemForSaleForm
          onSave={onSave}
          loading={loading}
          error={error}
          currentUser={currentUser}
        />
      </div>
    </div>
  )
}

export default NewItemForSale
