const { GraphQLString } = require('graphql');

exports.addTeacher = {
    name : "addTeacher",
    description: "add a teacher.",
    type: GraphQLString,
    resolve: () => 'hello'
}