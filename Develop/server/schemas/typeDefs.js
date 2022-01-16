// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
// define a query with type Query 21.1.4
// "me" type used per challenge instru
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
  bookId: ID
  title: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String 
}

type Auth {
  token: ID
  user: User
}

input saveBookInput {
  bookId: ID
  title: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}


  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: saveBookInput): User
    removeBook(bookId: ID): User

  }

`;


// export the typeDefs
module.exports = typeDefs;