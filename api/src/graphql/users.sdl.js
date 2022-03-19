export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    itemsForSale: [ItemForSale]!
    location: String!
  }

  type Query {
    users: [User!]! @skipAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    username: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    name: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }
`
