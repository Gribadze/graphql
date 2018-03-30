import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import {
    nodeDefinitions,
    fromGlobalId,
    globalIdField
} from 'graphql-relay';
import Disk from './disk.js';
import api from '../../api/';

const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { id } = fromGlobalId(globalId);
        return api.getCategoryById(id);
    },
    obj => {
        return CategoryType;
    }
);

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'Category of vynil records',
    fields: () => ({
        id: globalIdField()/*{
            type: new GraphQLNonNull(GraphQLString),
            resolve: category => category.id
        }*/,
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: category => category.name
        },
        disks: {
            type: new GraphQLList(Disk),
            resolve: api.getDisksByCategory
        }
    }),
    interfaces: [nodeInterface]
});

export default CategoryType;