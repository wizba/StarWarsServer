const { ApolloServer } = require('apollo-server-lambda');
const { resolvers } = require('./graphql/resolver');
const { typeDefs } = require('./graphql/schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});