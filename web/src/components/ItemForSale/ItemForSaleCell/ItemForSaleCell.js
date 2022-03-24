import ItemForSale from 'src/components/ItemForSale/ItemForSale'

export const QUERY = gql`
  query FindItemForSaleById($id: Int!) {
    itemForSale: itemForSale(id: $id) {
      id
      name
      quantity
      price
      condition
      cardId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ItemForSale not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ itemForSale }) => {
  return <ItemForSale itemForSale={itemForSale} />
}
