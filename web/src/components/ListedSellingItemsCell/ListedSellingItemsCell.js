export const QUERY = gql`
  query ListedSellingItemsQuery($cardId: Int!) {
    listedSellingItems: itemForSale(cardId: $cardId) {
      id
      name
      quantity
      price
      user {
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ listedSellingItems }) => {
  return (
    <div className="flex flex-col justify-start">
      {listedSellingItems.map((item) => {
        return (
          <div key={item.id} className="w-full flex justify-around items-start">
            <span className="w-1/4 text-center">{item.user.email}</span>
            <span className="w-1/4 text-center">{item.quantity}</span>
            <span className="w-1/4 text-center">{item.id}</span>
            <span className="w-1/4 text-center">{item.price}</span>
          </div>
        )
      })}
    </div>
  )
}
