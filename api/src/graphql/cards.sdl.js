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
    releaseYear: Int
    cardId: Int
    itemsForSale: [ItemForSale!]
  }

  type Query {
    cards: [Card!]! @skipAuth
    card(id: Int!): Card @skipAuth
  }

  input CreateCardInput {
    name: String!
    setName: String!
    releaseYear: Int!
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
    createCard(input: CreateCardInput!): Card! @skipAuth
    updateCard(id: Int!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: Int!): Card! @requireAuth
  }
`
