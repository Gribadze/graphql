import api from '../../../api';
import Category from '../../types/category';
import CategoryInput from '../../inputs/category';
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

export default {
    type: Category,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        category: {
            type: CategoryInput
        }
    },
    resolve: (source, args) => {
        return api.updateCategory(args.id, args.category);
    }
};