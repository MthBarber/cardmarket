import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
const REMOVE_FROM_BASKET_MUTATION = gql`
  mutation removeBasketOrderItem(
    $itemForSaleId: Int!
    $input: UpdateBasketOrderItemInput!
  ) {
    updateOrderItem(itemForSaleId: $input, input: $input) {
      id
    }
  }
`

export function RemoveFromBasketButton({ itemId }) {
  const { isAuthenticated, currentUser } = useAuth()

  const [update, { loading, error }] = useMutation(
    REMOVE_FROM_BASKET_MUTATION,
    {
      onCompleted: () => {
        toast.success('Card removed from basket')
      },
    }
  )

  const onSubmit = () => {
    update({
      variables: {
        // itemForSaleId: itemForSaleId,
        input: {
          // buyerId: currentUser.id,
          // itemForSaleId: item.id,
          orderItemStatus: 'RemovedFromBasket',
        },
      },
    })
  }

  console.log(itemId)
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
