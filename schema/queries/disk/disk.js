import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import api from '../../../api/';
import Disk from '../../types/disk';

export default {
    type: Disk,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, args) => api.getDiskById(args.id)
};