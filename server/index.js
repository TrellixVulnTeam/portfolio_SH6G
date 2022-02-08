const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');

const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  credentialsRequired: false
}));

// const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
// const resolvers = require('./resolvers');
// const apolloServer = new ApolloServer({typeDefs, resolvers});
// apolloServer.applyMiddleware({app, path: '/graphql'});

async function startApolloServer() {
  var app = express();
  var httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'})),
    resolvers: require('./resolvers'),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({app, path: '/graphql'});
  const PORT = process.env.PORT || 4000;
  await new Promise(resolve => httpServer.listen(PORT, resolve));
  console.log(`
      🚀  Server is ready at http://localhost:4000${server.graphqlPath}
      📭  Query at https://studio.apollographql.com/dev
  `);
}
startApolloServer();

app.get('/test', function (req, res) {
  res.send('hello world')
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}
// app.listen(port, () => console.info(`Server started on port ${port}`));