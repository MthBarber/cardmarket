export { QUERY as BasketIconUpdate }

export const QUERY = gql`
  query FindBasketIconQuery($buyerId: Int!) {
    basketIcon: basketOrderItems(buyerId: $buyerId) {
      buyerId
      orderItemStatus
      itemForSale {
        id
        condition
        price
        card {
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ basketIcon }) => {
  let basketItems = []

  for (let i = 0; i < basketIcon.length; i++) {
    if (basketIcon[i].orderItemStatus == 'InBasket') {
      basketItems.push(basketIcon[i])
    }
  }

  if (basketItems.length > 0) {
    return (
      <span className=" w-4 h-4 bg-red-500 text-white text-xs rounded-xl text-center flex justify-center items-center">
        {basketItems.length}
      </span>
    )
  } else {
    return
  }
}
