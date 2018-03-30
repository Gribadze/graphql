import api from '../../../api';
import Disk from '../../types/disk';
import {
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default {
    type: Disk,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (source, args) => {
        return api.deleteDisk(args.id);
    }
};