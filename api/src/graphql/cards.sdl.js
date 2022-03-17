export const schema = gql`
  type Card {
    id: Int!
    name: String!
    setName: String!
    startingFromPrice: Float!
    cardImage: String!
    color: String!
    cardType: String!
    manaValue: Int!
    releaseYear: Int!
  }

  type Query {
    cards: [Card!]! @skipAuth
    card(id: Int!): Card @skipAuth
  }

  input CreateCardInput {
    name: String!
    setName: String!
    startingFromPrice: Float!
    cardImage: String!
    color: String!
    cardType: String!
    manaValue: Int!
  }

  input UpdateCardInput {
    name: String
    setName: String
    startingFromPrice: Float
    cardImage: String
    color: String
    cardType: String
    manaValue: Int
  }

  type Mutation {
    createCard(input: CreateCardInput!): Card! @requireAuth
    updateCard(id: Int!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: Int!): Card! @requireAuth
  }
`
