export const QUERY = gql`
  query NewReleasesQuery {
    cards {
      id
      name
      setName
      startingFromPrice
      releaseYear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => {
        return <li key={card.id}>{JSON.stringify(card)}</li>
      })}
    </ul>
  )
}
