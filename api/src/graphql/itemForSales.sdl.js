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
    condition: String!
  }

  type Query {
    itemForSales: [ItemForSale!]! @skipAuth
    itemForSale(cardId: Int!): [ItemForSale!]! @skipAuth
    itemsForSaleUser(userId: Int!): [ItemForSale!]! @skipAuth
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

  type Mutation {
    createItemForSale(input: CreateItemForSaleInput!): ItemForSale! @requireAuth
    updateItemForSale(id: Int!, input: UpdateItemForSaleInput!): ItemForSale!
      @requireAuth
    deleteItemForSale(id: Int!): ItemForSale! @requireAuth
  }
`
