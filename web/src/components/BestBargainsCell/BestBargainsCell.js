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
    <ul className="text-black w-full h-92 flex flex-col justify-between border-x px-16">
      {bestBargainsArray.map((card) => {
        return (
          <Link key={card.id} to={routes.displayCard({ id: card.id })}>
            <li
              id="text-gray"
              className="flex w-full h-1/6 justify-between mt-2 2xl:font-medium"
            >
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
