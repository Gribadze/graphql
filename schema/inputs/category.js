import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'categoryInput',
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
});