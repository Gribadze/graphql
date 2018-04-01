import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import {
    globalIdField,
    connectionFromPromisedArray,
    connectionArgs,
    connectionDefinitions
} from 'graphql-relay';
import models from '../../models';
import { categoryConnection } from './category';
import { nodeInterface } from './node';

export const DiskType = new GraphQLObjectType({
    name: 'Disk',
    description: 'Vinyl record',
    fields: () => ({
        id: globalIdField(),
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        categories: {
            type: categoryConnection,
            args: connectionArgs,
            resolve: (source, args) => connectionFromPromisedArray(
                source.getCategories(),
                args
            )
        }
    }),
    interfaces: [ nodeInterface ],
    isTypeOf: value => value instanceof models.Disk
});

export const { connectionType: diskConnection } = connectionDefinitions({ nodeType: DiskType });
