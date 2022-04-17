export const schema = gql`
  type CompletedOrder {
    id: Int!
    user: User!
    userId: Int!
    orderItems: [OrderItem]!
  }

  type Query {
    completedOrders: [CompletedOrder!]! @requireAuth
    completedOrder(id: Int!): CompletedOrder @requireAuth
    completedOrderUser(userId: Int!): [CompletedOrder!]! @skipAuth
  }

  input CreateCompletedOrderInput {
    userId: Int!
    orderItemIds: [Int]
  }

  input UpdateCompletedOrderInput {
    userId: Int
  }

  type Mutation {
    createCompletedOrder(input: CreateCompletedOrderInput!): CompletedOrder!
      @skipAuth
    updateCompletedOrder(
      id: Int!
      input: UpdateCompletedOrderInput!
    ): CompletedOrder! @requireAuth
    deleteCompletedOrder(id: Int!): CompletedOrder! @requireAuth
  }
`
