export const schema = gql`
  type OrderItem {
    id: Int!
    user: User!
    buyerId: Int!
    itemForSale: ItemForSale!
    itemForSaleId: Int!
    orderItemStatus: String!
  }

  type Query {
    orderItems: [OrderItem!]! @skipAuth
    orderItem(id: Int!): OrderItem @skipAuth
    basketOrderItems(buyerId: Int!): [OrderItem] @skipAuth
  }

  input CreateOrderItemInput {
    buyerId: Int!
    itemForSaleId: Int!
    orderItemStatus: String!
  }

  input UpdateOrderItemInput {
    buyerId: Int
    orderItemId: Int
    orderItemStatus: String
  }

  type Mutation {
    createOrderItem(input: CreateOrderItemInput!): OrderItem! @skipAuth
    updateOrderItem(id: Int!, input: UpdateOrderItemInput!): OrderItem!
      @requireAuth
    removeBasketOrderItem(
      itemForSaleId: Int!
      input: UpdateOrderItemInput!
    ): OrderItem! @skipAuth
    deleteOrderItem(id: Int!): OrderItem! @requireAuth
  }
`
