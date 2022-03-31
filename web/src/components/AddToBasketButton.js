import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { QUERY as ListedSellingItemsQuery } from 'src/components/ListedSellingItemsCell/ListedSellingItemsCell'
import React from 'react'
import { useAuth } from '@redwoodjs/auth'

const ADD_CARD_TO_BASKET = gql`
  mutation createOrderItem($input: CreateOrderItemInput!) {
    createOrderItem(input: $input) {
      id
      buyerId
      itemForSaleId
      orderItemStatus
    }
  }
`

export function AddToBasketButton({ item }) {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const [create, { loading, error }] = useMutation(ADD_CARD_TO_BASKET, {
    onCompleted: () => {
      toast.success('Card added to basket')
    },
    refetchQueries: [ListedSellingItemsQuery],
  })

  const onSubmit = () => {
    create({
      variables: {
        input: {
          buyerId: currentUser.id,
          itemForSaleId: item.id,
          orderItemStatus: 'InBasket',
        },
      },
    })
  }
  function Click() {
    console.log(
      item.id,
      '£',
      item.price,
      item.condition,
      item.user.username,
      ' Ow you clicked me'
    )
  }

  return (
    <>
      {console.log(item)}
      <Toaster />
      {item.orderItems.length > 0 ? (
        <button className="bg-red-500 border-2 px-2 border-red-500">
          In Basket
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="bg-green-500 border-2 px-2 border-green-500"
        >
          Add To Basket
        </button>
      )}
    </>
  )
}
