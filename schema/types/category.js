import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';
import {
    globalIdField,
    connectionFromPromisedArray,
    connectionArgs,
    connectionDefinitions
} from 'graphql-relay';
import models from '../../models';
import { diskConnection } from './disk';
import { nodeInterface } from './node';

export const CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'Category of vynil record',
    fields: () => ({
        id: globalIdField(),
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        disks: {
            type: diskConnection,
            args: connectionArgs,
            resolve: (source, args) => connectionFromPromisedArray(
                source.getDisks(),
                args
            )
        }
    }),
    interfaces: [ nodeInterface ],
    isTypeOf: value => value instanceof models.Category
});

export const { connectionType: categoryConnection } = connectionDefinitions({ nodeType: CategoryType });
