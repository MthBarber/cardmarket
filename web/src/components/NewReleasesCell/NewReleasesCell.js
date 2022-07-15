import { Link, routes } from '@redwoodjs/router'

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
  let newReleasesArray = []
  for (let i = 0; newReleasesArray.length < 6; i++) {
    if (cards[i].releaseYear >= 2020) {
      newReleasesArray.push(cards[i])
    }
  }

  return (
    <ul className="w-full flex flex-col border-x px-16">
      {newReleasesArray.map((card) => {
        return (
          <Link key={card.id} to={routes.displayCard({ id: card.id })}>
            <li
              id="text-blue"
              className="flex text-black mt-2 justify-between 2xl:font-medium"
              key={card.id}
            >
              <span id="text-gray" className="w-10/12 mr-6">
                {card.name}
              </span>
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
