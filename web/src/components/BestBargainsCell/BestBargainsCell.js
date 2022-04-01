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
  for (let i = 0; bestBargainsArray.length < 6; i++) {
    if (cards[i].startingFromPrice <= 6.0) {
      bestBargainsArray.push(cards[i])
    }
  }
  console.log(bestBargainsArray)
  return (
    <ul className="text-black w-full flex flex-col border-x px-16">
      {bestBargainsArray.map((card) => {
        return (
          <Link key={card.id} to={routes.displayCard({ id: card.id })}>
            <li className="flex w-full justify-between mt-2 font-medium">
              <span className="w-10/12 mr-6">{card.name}</span>
              <span className="w-1/12">
                £{card.startingFromPrice.toFixed(2)}
              </span>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}
