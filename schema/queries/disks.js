import { GraphQLID } from 'graphql';
import {
    connectionArgs,
    connectionFromPromisedArray,
    fromGlobalId
} from 'graphql-relay';
import { diskConnection } from '../types';
import models from '../../models';

export default {
    type: diskConnection,
    args: Object.assign({}, connectionArgs, {
        categoryId: {
            type: GraphQLID
        }
    }),
    resolve: (source, args) => connectionFromPromisedArray(
        (() => {
            if (args.categoryId) {
                const { id } = fromGlobalId(args.categoryId);
                return models.Category.findById(id).then(category => category.getDisks());
            }
            return models.Disk.findAll();
        })(),
        args
    )
};