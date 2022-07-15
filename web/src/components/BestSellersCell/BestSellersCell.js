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
    <div className="h-auto grid md:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:h-64 2xl:h-72 justify-around">
      {bestSellersArray.map((card) => {
        return (
          <div
            key={card.id}
            id="text-gray"
            className=" mx-6 lg:flex lg:items-center lg:h-48 lg:justify-between lg:text-sm text-black lg:mx-6"
          >
            <Link
              to={routes.displayCard({
                id: card.id,
              })}
            >
              <ul className="flex flex-col items-center my-6">
                <img
                  className="sm:h-48 sm:w-36 lg:h-40 lg:w-48 2xl:h-64 2xl:w-44  sm:hover:animate-pulse"
                  src={card.cardImage}
                  alt={card.name}
                ></img>
                <li className="h-10 w-28 text-center text-base mt-8 font-medium">
                  {card.name}
                </li>
              </ul>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
