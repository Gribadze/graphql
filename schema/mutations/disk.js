import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import {
    mutationWithClientMutationId,
    fromGlobalId
} from 'graphql-relay';
import { DiskType } from '../types';
import models from '../../models';

export const createDisk = mutationWithClientMutationId({
    name: 'createDisk',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        categoryId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        disk: {
            type: DiskType
        }
    },
    mutateAndGetPayload: async input => {
        const { id } = fromGlobalId(input.categoryId);
        if (id === '') {
            throw new Error(`Category does not exist with id: ${input.categoryId}`);
        }
        return {
            disk: await models.Disk.create({
                name: input.name
            }).then(newDisk => {
                return newDisk.addCategory(id).then(() => newDisk);
            })
        };
    }
});

export const updateDisk = mutationWithClientMutationId({
    name: 'updateDisk',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    outputFields: {
        disk: {
            type: DiskType
        }
    },
    mutateAndGetPayload: async input => {
        const { id } = fromGlobalId(input.id);
        return {
            disk : await models.Disk.findById(id).then(disk => disk.update({
                name: input.name
            }))
        };
    }
});

export const deleteDisk = mutationWithClientMutationId({
    name: 'deleteDisk',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        disk: {
            type: DiskType
        }
    },
    mutateAndGetPayload: async input => {
        const { id } = fromGlobalId(input.id);
        return {
            disk : await models.Disk.findById(id).then(disk => {
                return disk.destroy().then(() => disk);
            })
        };
    }
});