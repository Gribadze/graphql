import api from '../../../api';
import Category from '../../types/category';
import {
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default {
    type: Category,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (source, args) => {
        return api.deleteCategory(args.id);
    }
};