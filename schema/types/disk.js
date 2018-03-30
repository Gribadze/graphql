import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';

import Category from './category.js';
import api from '../../api/';

export default new GraphQLObjectType({
    name: 'Disk',
    description: 'Vinyl record',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: disk => disk.id
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: disk => disk.name
        },
        categories: {
            type: new GraphQLList(Category),
            resolve: api.getCategoriesByDisk
        }
    })
});