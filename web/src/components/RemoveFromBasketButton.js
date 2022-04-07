import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { ItemsInBasketQuery } from 'src/components/BasketItemsCell/BasketItemsCell'

const REMOVE_FROM_BASKET = gql`
  mutation updateOrderItem($id: Int!, $input: UpdateOrderItemInput!) {
    updateOrderItem(id: $id, input: $input) {
      id
    }
  }
`

export function RemoveFromBasketButton({ itemId }) {
  const { isAuthenticated } = useAuth()

  const [update] = useMutation(REMOVE_FROM_BASKET, {
    onCompleted: () => {
      toast.success('Card removed from basket')
    },
    refetchQueries: [ItemsInBasketQuery],
  })

  const onSubmit = () => {
    update({
      variables: {
        id: itemId,
        input: {
          orderItemStatus: '', //changed from RemoveFromBasket
        },
      },
    })
  }

  return (
    <div>
      <Toaster />
      {isAuthenticated ? (
        <button
          onClick={onSubmit}
          className="bg-red-500 border text-white border-black w-6 border-2"
        >
          X
        </button>
      ) : null}
    </div>
  )
}
