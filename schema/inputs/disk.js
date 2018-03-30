import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'diskInput',
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
});