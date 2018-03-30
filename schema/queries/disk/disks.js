import {
    GraphQLList
} from 'graphql';

import Disk from '../../types/disk';
import api from '../../../api/';

export default {
    type: new GraphQLList(Disk),
    args: {

    },
    resolve: (root, args) => api.getAllDisks(args)
};