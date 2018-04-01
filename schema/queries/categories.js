import {
    connectionArgs,
    connectionFromPromisedArray
} from 'graphql-relay';
import { categoryConnection } from '../types';
import models from '../../models';

export default {
    type: categoryConnection,
    args: connectionArgs,
    resolve: (source, args) => connectionFromPromisedArray(
        models.Category.findAll(),
        args
    )
};