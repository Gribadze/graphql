import api from '../../../api';
import Disk from '../../types/disk';
import DiskInput from '../../inputs/disk';
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

export default {
    type: Disk,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        disk: {
            type: DiskInput
        }
    },
    resolve: (source, args) => {
        return api.updateDisk(args.id, args.disk);
    }
};