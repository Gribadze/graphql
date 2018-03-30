import api from '../../../api';
import Disk from '../../types/disk';
import DiskInput from '../../inputs/disk';
import {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default {
    type: Disk,
    args: {
        disk: {
            type: DiskInput
        },
        categories: {
            type: new GraphQLNonNull(GraphQLList(new GraphQLNonNull(GraphQLString)))
        }
    },
    resolve: (source, args) => {
        return api.createDisk(args.disk, args.categories);
    }
};