export const QUERY = gql`
  query BestSellersQuery {
    cards {
      id
      name
      cardImage
      startingFromPrice
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ cards }) => {
  {
    console.log(cards)
  }
  return (
    <div className="flex items-center h-48 justify-around">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className="flex items-center h-48 justify-between text-xs text-white mx-4"
          >
            <ul>
              <li className="h-10 w-28 text-center">{card.name}</li>
              <img
                className="h-36 w-30 my-2"
                src={card.cardImage}
                alt={card.name}
              ></img>
              <li className="text-center">£{card.startingFromPrice}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
