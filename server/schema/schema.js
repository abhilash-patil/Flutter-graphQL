const graphql = require('graphql');
var _ = require('lodash');




//dummy data
var usersData = [   {id: '1', name: 'bond', age: 34, profession: 'Developer'},
                    {id: '25', name: 'infinity', age: 21, profession: 'Designer'},
                    {id: '45', name: 'RDJ', age: 44, profession: 'Singer'},
                    {id: '478', name: 'strange', age: 42, profession: 'Teacher'},
                    {id: '63', name: 'Tom', age: 22, profession: 'Painter'},
                ];
const {

    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema

} = graphql

//create types
const UserType = new GraphQLObjectType({
    name: 'User',
    descrpition: 'Documentation for user..',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString}
    })
});

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    descrpition: 'Hobby Description',
    fields: ()=>({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        descrpition: {type: GraphQLString}

    })
});
//RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    descrpition: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},

            resolve(parent, args){
                return _.find(usersData, {id: args.id})
            // we resolve with data
            // get and return data from a datasource
            }
        
        },

        hobby: {
            type: HobbyType,
            args: {id: {type:GraphQLID}},

            resolve(parent, args){
              //resolve with data
            }

        }
    }

});


module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})