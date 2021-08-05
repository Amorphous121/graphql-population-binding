const { GraphQLObjectType} = require('graphql');
const { addTeacher } = require('./teacher-resolver');
const RootQuery = new GraphQLObjectType({
    name: "Mutation",
    description: 'Root Mutation',
    fields: () => ({
        addTeacher 
    })
})

module.exports = RootQuery;