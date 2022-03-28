export const schema = gql`
  type OrderItem {
    id: Int!
    user: User!
    buyerId: Int!
    itemForSale: ItemForSale!
    orderItemId: Int!
    orderItemStatus: String!
  }

  type Query {
    orderItems: [OrderItem!]! @requireAuth
    orderItem(id: Int!): OrderItem @requireAuth
  }

  input CreateOrderItemInput {
    buyerId: Int!
    orderItemId: Int!
    orderItemStatus: String!
  }

  input UpdateOrderItemInput {
    buyerId: Int
    orderItemId: Int
    orderItemStatus: String
  }

  type Mutation {
    createOrderItem(input: CreateOrderItemInput!): OrderItem! @requireAuth
    updateOrderItem(id: Int!, input: UpdateOrderItemInput!): OrderItem!
      @requireAuth
    deleteOrderItem(id: Int!): OrderItem! @requireAuth
  }
`
