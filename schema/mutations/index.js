import { GraphQLObjectType } from 'graphql';
import * as CategoryMutations from './category';
import * as DiskMutations from './disk';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: Object.assign({},
        DiskMutations,
        CategoryMutations
    )
});