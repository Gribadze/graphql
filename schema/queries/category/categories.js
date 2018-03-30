import {
    GraphQLList
} from 'graphql';

import Category from '../../types/category';
import api from '../../../api/';

export default {
    type: new GraphQLList(Category),
    args: {

    },
    resolve: (root, args) => api.getAllCategories(args)
};