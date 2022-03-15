import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CardForm from 'src/components/Card/CardForm'

export const QUERY = gql`
  query EditCardById($id: Int!) {
    card: card(id: $id) {
      id
      name
      setName
      startingFromPrice
      cardImage
      color
      cardType
      manaValue
    }
  }
`
const UPDATE_CARD_MUTATION = gql`
  mutation UpdateCardMutation($id: Int!, $input: UpdateCardInput!) {
    updateCard(id: $id, input: $input) {
      id
      name
      setName
      startingFromPrice
      cardImage
      color
      cardType
      manaValue
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ card }) => {
  const [updateCard, { loading, error }] = useMutation(UPDATE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card updated')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateCard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Card {card.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CardForm card={card} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
