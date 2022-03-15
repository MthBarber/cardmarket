import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BestBargainsQuery {
    cards {
      id
      name
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
  let bestBargainsArray = []
  for (let i = 0; bestBargainsArray.length < 5; i++) {
    if (cards[i].startingFromPrice <= 6.0) {
      bestBargainsArray.push(cards[i])
    }
  }
  console.log(bestBargainsArray)
  return (
    <ul className="text-white flex flex-col">
      {bestBargainsArray.map((card) => {
        return (
          <li key={card.id} className="flex w-full mt-2">
            <Link to={routes.displayCard({ id: card.id })}>
              <span className="mr-4">{card.name}</span>
              <span>£{card.startingFromPrice}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
