const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./src/schema')

const port = process.env.PORT || 8080

new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`),
)



// const { resolvers, typeDefs } = require('./src/schema')
// const { ApolloServer} = require('apollo-server-cloud-functions');
// const {
//   ApolloServerPluginLandingPageLocalDefault
// } = require('apollo-server-core');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: 'bounded',
//   plugins: [
//     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//   ],
// });

// exports.handler = server.createHandler();
