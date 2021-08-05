const { GraphQLObjectType, GraphQLString} = require('graphql');
const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: 'Root Query',
    fields: () => ({
        getAllteacher : {
            description: "GEt a teacher.",
            type: GraphQLString,
            resolve: () => 'hello'
        }
    })
})

module.exports = RootQuery;