import Card from 'src/components/Card/Card'

export const QUERY = gql`
  query FindCardById($id: Int!) {
    card: card(id: $id) {
      id
      name
      setName
      startingFromPrice
      cardImage
      color
      cardType
      manaValue
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Card not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ card }) => {
  return <Card card={card} />
}
