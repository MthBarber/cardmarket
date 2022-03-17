export const schema = gql`
  type ItemForSale {
    id: Int!
    name: String!
    quantity: Int!
    price: Float!
    card: Card!
    cardId: Int!
    user: User!
    userId: Int!
  }

  type Query {
    itemForSales: [ItemForSale!]! @skipAuth
    itemForSale(cardId: Int!): [ItemForSale!]! @skipAuth
  }

  input CreateItemForSaleInput {
    name: String!
    quantity: Int!
    price: Float!
    cardId: Int!
    userId: Int!
  }

  input UpdateItemForSaleInput {
    name: String
    quantity: Int
    price: Float
    cardId: Int
    userId: Int
  }
`
