import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { QUERY as ListedSellingItemsQuery } from 'src/components/ListedSellingItemsCell/ListedSellingItemsCell'
import React from 'react'
import { useAuth } from '@redwoodjs/auth'
import { BasketIconUpdate } from 'src/components/BasketIconCell/BasketIconCell'

//for adding new row to OrderItems table
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
//Updates existing row in OrderItems table
const READD_CARD_TO_BASKET = gql`
  mutation updateOrderItem($id: Int!, $input: UpdateOrderItemInput!) {
    updateOrderItem(id: $id, input: $input) {
      id
    }
  }
`

export function AddToBasketButton({ item }) {
  const { isAuthenticated, currentUser } = useAuth()
  console.log(item)
  const [create, { loading, error }] = useMutation(ADD_CARD_TO_BASKET, {
    onCompleted: () => {
      toast.success('Card added to basket')
    },
    refetchQueries: [ListedSellingItemsQuery, BasketIconUpdate],
  })

  const [update] = useMutation(READD_CARD_TO_BASKET, {
    onCompleted: () => {
      toast.success('Card added to basket')
    },
    refetchQueries: [ListedSellingItemsQuery, BasketIconUpdate],
  })
  //add conditional if row already exists for item to prevent duplication
  const onSubmit = () => {
    if (item.orderItems.length === 0) {
      create({
        variables: {
          input: {
            buyerId: currentUser.id,
            itemForSaleId: item.id,
            orderItemStatus: 'InBasket',
          },
        },
      })
    } else {
      update({
        variables: {
          id: item.orderItems[0].id,
          input: {
            orderItemStatus: 'InBasket', //changed from RemoveFromBasket
          },
        },
      })
    }
  }

  return (
    <>
      {/* {console.log(item.orderItems)} */}
      <Toaster />
      {item.orderItems.length > 0 &&
      item.orderItems[0].orderItemStatus == 'InBasket' ? (
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
