import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { ItemsInBasketQuery } from 'src/components/BasketItemsCell/BasketItemsCell'
import { navigate, routes } from '@redwoodjs/router'

const CHANGE_TO_COMPLETE = gql`
  mutation updateOrderItem($id: Int!, $input: UpdateOrderItemInput!) {
    updateOrderItem(id: $id, input: $input) {
      id
    }
  }
`

export function CompletePurchaseButton({ completeBasketItems }) {
  const [update] = useMutation(CHANGE_TO_COMPLETE, {
    onCompleted: () => {},
    refetchQueries: [ItemsInBasketQuery],
  })

  const onSubmit = (cardId, updateStatus) => {
    update({
      variables: {
        id: cardId,
        input: {
          orderItemStatus: updateStatus,
        },
      },
    })
  }

  function CompletePurchase() {
    for (let i = 0; i < completeBasketItems.length; i++) {
      if (completeBasketItems[i].orderItemStatus == 'InBasket') {
        onSubmit(completeBasketItems[i].id, 'PurchaseComplete')
      } else {
        console.log('Skip here for ', completeBasketItems[i])
      }
    }
    toast.success('Purchase complete, thanks!')
    navigate(routes.orderConfirmation())
  }
  return (
    <button
      onClick={CompletePurchase}
      className="border-2 bg-green-500 border-green-500 flex justify-end px-2 text-white text-lg font-bold"
    >
      Complete Purchase
    </button>
  )
}
