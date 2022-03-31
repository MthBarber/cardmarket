export const schema = gql`
  type ItemForSale {
    id: Int!
    cardRef: String!
    quantity: Int!
    price: Float!
    card: Card!
    cardId: Int!
    user: User!
    userId: Int!
    condition: String!
    orderItems: [OrderItem]
  }

  type Query {
    itemForSales: [ItemForSale!]! @skipAuth
    itemForSale(id: Int!): ItemForSale! @skipAuth
    itemsForSale(cardId: Int!): [ItemForSale!]! @skipAuth
    itemsForSaleUser(userId: Int!): [ItemForSale!]! @skipAuth
    cardListingItemsForSale(cardId: Int!): [ItemForSale!]! @skipAuth
  }

  input CreateItemForSaleInput {
    cardRef: String!
    quantity: Int!
    price: Float!
    condition: String!
    cardId: Int!
    userId: Int!
  }

  input UpdateItemForSaleInput {
    cardRef: String
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
