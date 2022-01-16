const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      const params = username ? { username } : {}
      return User.find(params).sort({ createdAt: -1 });
    }
  }
};





  module.exports = resolvers;