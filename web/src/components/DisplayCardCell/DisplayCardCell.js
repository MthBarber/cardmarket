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
      <div className=" h-1/2 w-10/12 flex mt-4 justify-center">
        <div className="flex flex-col ml-auto mr-48 justify-center items-center">
          <img
            className="h-96 w-72"
            src={displayCard.cardImage}
            alt={displayCard.name}
          ></img>
        </div>
        <div className="mt-16 mb-16 border mr-auto border-black p-4">
          <div className="font-semibold">
            Name: <span className="font-normal">{displayCard.name}</span>
          </div>
          <div className="font-semibold">
            Collectable's Market ID:{' '}
            <span className="font-normal">{displayCard.id}</span>
          </div>
          <div className="font-semibold">
            Set: <span className="font-normal">{displayCard.setName}</span>
          </div>
          <div className="font-semibold">
            Release Year:{' '}
            <span className="font-normal">{displayCard.releaseYear}</span>
          </div>
          <div className="font-semibold">
            Starting from:{' '}
            <span className="font-normal">
              £{displayCard.startingFromPrice}
            </span>
          </div>
          <div className="font-semibold">
            Color Identity: <span className="font-normal"> </span>
            <span className="font-normal">{displayCard.color}</span>
          </div>
          <div className="font-semibold">
            Card Type:<span className="normal"> </span>
            <span className="font-normal">{displayCard.cardType}</span>
          </div>
          <div className="font-semibold">
            Mana Value:{' '}
            <span className="font-normal">{displayCard.manaValue}</span>
          </div>
          <div className="font-semibold">Rules Here:</div>
          <div className="font-semibold">Number of items for Sale:</div>
        </div>
      </div>
    </div>
  )
}
