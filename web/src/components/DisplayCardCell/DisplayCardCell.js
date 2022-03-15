export const QUERY = gql`
  query FindDisplayCardQuery($id: Int!) {
    displayCard: card(id: $id) {
      id
      name
      setName
      startingFromPrice
      cardImage
      color
      cardType
      manaValue
      releaseYear
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ displayCard }) => {
  return (
    <div className="flex flex-col items-center h-1/2 w-screen mb-8">
      <div className="my-4 text-2xl font-bold">{displayCard.name}</div>
      <div className=" h-1/2 w-10/12 flex mt-4 justify-around">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-96 w-72"
            src={displayCard.cardImage}
            alt={displayCard.name}
          ></img>
        </div>
        <div className="mt-16 ">
          <div>
            Name: <span className="font-bold">{displayCard.name}</span>
          </div>
          <div>
            Collectable's Market ID:{' '}
            <span className="font-semibold">{displayCard.id}</span>
          </div>
          <div>
            Set: <span className="font-semibold">{displayCard.setName}</span>
          </div>
          <div>
            Release Year:{' '}
            <span className="font-semibold">{displayCard.releaseYear}</span>
          </div>
          <div>
            Starting from:{' '}
            <span className="font-semibold">
              £{displayCard.startingFromPrice}
            </span>
          </div>
          <div>
            Color Identity:{' '}
            <span className="font-semibold">{displayCard.color}</span>
          </div>
          <div>
            Card Type:{' '}
            <span className="font-semibold">{displayCard.cardType}</span>
          </div>
          <div>
            Mana Value:{' '}
            <span className="font-semibold">{displayCard.manaValue}</span>
          </div>
          <div>Rules Here:</div>
          <div>Number of items for Sale:</div>
        </div>
      </div>
    </div>
  )
}
