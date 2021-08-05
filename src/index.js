const express = require('express');
const expressGraphqlServer = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = require('graphql');
const RootQuery = require('./graphql/rootQuery');
const RootMutation = require('./graphql/rootMutation');
const app = express();



const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

app.use('/graphql', expressGraphqlServer({
    graphiql: true,
    schema
}));

app.use((err, req, res, next) => {
    console.log(err.message);
    res.send(err.message);
})

app.listen(4000, () => console.log("Server is up and running at 4000"));