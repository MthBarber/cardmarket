import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CARD_MUTATION = gql`
  mutation DeleteCardMutation($id: Int!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Card = ({ card }) => {
  const [deleteCard] = useMutation(DELETE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card deleted')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Card {card.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{card.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{card.name}</td>
            </tr>
            <tr>
              <th>Set name</th>
              <td>{card.setName}</td>
            </tr>
            <tr>
              <th>Starting from price</th>
              <td>{card.startingFromPrice}</td>
            </tr>
            <tr>
              <th>Card image</th>
              <td>{card.cardImage}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{card.color}</td>
            </tr>
            <tr>
              <th>Card type</th>
              <td>{card.cardType}</td>
            </tr>
            <tr>
              <th>Mana value</th>
              <td>{card.manaValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCard({ id: card.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(card.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Card
