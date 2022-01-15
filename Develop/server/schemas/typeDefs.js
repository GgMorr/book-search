// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
// define a query with type Query 21.1.4
// "me" type used per challenge instru
const typeDefs = gql`
  type Query {
    me: String
  }
`;







// export the typeDefs
module.exports = typeDefs;