const typeDefs = `
  type Message {
    _id: ID!
    From: String!
    Description: String!
    FullDate: String!
    Date: String!
    Time: String!
    Month: Int!
  }

  type Query {
    messages: [Message!]
  }

  input CreateMessageInput {
    From: String!
    Description: String!
    FullDate: String!
    Date: String!
    Time: String!
    Month: Int!
  }

  # Mutation
  type Mutation {

    # Message #
    createMessage(data: CreateMessageInput!): Boolean!

  }

  # Subscribe
  type Subscription {

    # Message #
    messageCreated: Message!
    
  }
`;

export default typeDefs;