import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import api from '../../../api/';
import Category from '../../types/category';

export default {
    type: Category,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, args) => api.getCategoryById(args.id)
};