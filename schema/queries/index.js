import {
    GraphQLObjectType,
} from 'graphql';
import { nodeField as node } from '../types';
import disks from './disks';
import categories from './categories';

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        disks,
        categories,
        node
    }
});
