import api from '../../../api';
import Category from '../../types/category';
import CategoryInput from '../../inputs/category';

export default {
    type: Category,
    args: {
        category: {
            type: CategoryInput
        }
    },
    resolve: (source, args) => {
        return api.createCategory(args.category);
    }
};