export const QUERY = gql`
  query ListedSellingItemsQuery($cardId: Int!) {
    listedSellingItems: itemForSale(cardId: $cardId) {
      id
      name
      quantity
      price
      condition
      user {
        email
        location
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="text-center bg-white">No items available for sale</div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ listedSellingItems }) => {
  return (
    <div id="jost" className="flex flex-col justify-start bg-white">
      {listedSellingItems.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full flex justify-around items-start border-b border-black"
          >
            <span className="w-1/5 text-center">{item.user.email}</span>
            <span className="w-1/5 text-center">{item.user.location}</span>
            <span className="w-1/5 text-center">{item.condition}</span>
            <span className="w-1/5 text-center">{item.quantity}</span>
            <span className="w-1/5 text-center">£{item.price}</span>
          </div>
        )
      })}
    </div>
  )
}
