export const QUERY = gql`
  query FindDisplayCompletedOrderQuery($id: Int!) {
    displayCompletedOrder: completedOrder(id: $id) {
      id
      orderItems {
        itemForSale {
          price
          card {
            name
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ displayCompletedOrder }) => {
  let keyNum = 0
  // let sortedArray = []
  // for (let i = 0; i < displayCompletedOrder.orderItems.length; i++) {
  //   sortedArray.push(displayCompletedOrder.orderItems[i])
  // }
  // console.log(sortedArray)
  return (
    <div className="h-3/4 w-full flex-col border border-gray-600 flex justify-around items-center">
      <ul className="w-full flex justify-between ">
        <li className="w-1/3">Item Name</li>
        <li className="w-1/3">Price</li>
        <li className="w-1/3">Quantity</li>
      </ul>
      <section className="w-full">
        {displayCompletedOrder.orderItems.map((item) => {
          return (
            <ul key={(keyNum += 1)} className=" w-full flex justify-between">
              <li className="w-1/3">{item.itemForSale.card.name}</li>
              <li className="w-1/3">£{item.itemForSale.price}</li>
              <li className="w-1/3"> 1</li>
            </ul>
          )
        })}
      </section>
    </div>
  )
}
