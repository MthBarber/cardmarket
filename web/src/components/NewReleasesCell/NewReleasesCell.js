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
    <ul>
      {newReleasesArray.map((card) => {
        return (
          card.releaseYear >= 2020 && (
            <Link to={routes.displayCard({ id: card.id })}>
              <li className="flex text-white mt-2" key={card.id}>
                <span className="mr-4">{card.name}</span>
                <span className="mr-4">£{card.startingFromPrice}</span>
              </li>
            </Link>
          )
        )
      })}
    </ul>
  )
}
