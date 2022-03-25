import { Link, routes } from '@redwoodjs/router'

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
  const bestSellersArray = []
  for (let i = 0; i < 6; i++) {
    bestSellersArray.push(cards[i])
  }

  return (
    <div className="flex items-center h-64 justify-around">
      {bestSellersArray.map((card) => {
        return (
          <div
            key={card.id}
            className="flex items-center h-48 justify-between text-sm text-black mx-6"
          >
            <Link
              to={routes.displayCard({
                id: card.id,
              })}
            >
              <ul className="flex flex-col items-center">
                <li className="h-10 w-28 text-center text-base font-medium">
                  {card.name}
                </li>
                <img
                  className="h-56 w-40 mt-8"
                  src={card.cardImage}
                  alt={card.name}
                ></img>
              </ul>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
