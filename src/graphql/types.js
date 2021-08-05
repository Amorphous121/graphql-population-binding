const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList } = require('graphql');



exports.courseType = new GraphQLObjectType({
    name: 'Course',
    description: "Represents a single Course",
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        duration: { type: GraphQLInt },
        createdBy : this.TeacherType
    })
});


exports.TeacherType = new GraphQLObjectType({
    name: 'Teacher',
    description: "Represents a single Teacher",
    fields: (parent, args, req, info) => ({
        _id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        courses: this.courseType
    })
})