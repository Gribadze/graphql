import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import {
    mutationWithClientMutationId,
    fromGlobalId
} from 'graphql-relay';
import { CategoryType } from '../types';
import models from '../../models';

export const createCategory = mutationWithClientMutationId({
    name: 'createCategory',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    outputFields: {
        category: {
            type: CategoryType
        }
    },
    mutateAndGetPayload: async input => ({
        category: await models.Category.create(input)
    })
});

export const updateCategory = mutationWithClientMutationId({
    name: 'updateCategory',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    outputFields: {
        category: {
            type: CategoryType
        }
    },
    mutateAndGetPayload: async input => {
        const { id } = fromGlobalId(input.id);
        return {
            category : await models.Category.findById(id).then(category => category.update({
                name: input.name
            }))
        };
    }
});

export const deleteCategory = mutationWithClientMutationId({
    name: 'deleteCategory',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        category: {
            type: CategoryType
        }
    },
    mutateAndGetPayload: async input => {
        const { id } = fromGlobalId(input.id);
        return {
            category : await models.Category.findById(id).then(category => {
                return category.destroy().then(() => category);
            })
        };
    }
});

export const addDiskToCategory = mutationWithClientMutationId({
    name: 'addDiskToCategory',
    inputFields: {
        diskId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        categoryId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        category: {
            type: CategoryType
        }
    },
    mutateAndGetPayload: async input => {
        const { id: diskId } = fromGlobalId(input.diskId);
        const { id: categoryId } = fromGlobalId(input.categoryId);
        return {
            category : await models.Category.findById(categoryId).then(category => {
                return category.addDisk(diskId).then(() => category);
            })
        };
    }
});

export const removeDiskFromCategory = mutationWithClientMutationId({
    name: 'removeDiskFromCategory',
    inputFields: {
        diskId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        categoryId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        category: {
            type: CategoryType
        }
    },
    mutateAndGetPayload: async input => {
        const { id: diskId } = fromGlobalId(input.diskId);
        const { id: categoryId } = fromGlobalId(input.categoryId);
        return {
            category : await models.Category.findById(categoryId).then(category => {
                return category.getDisks().then(disksOfCategory => {
                    if (disksOfCategory.length > 2) {
                        throw new Error('Vinyl record must have at least one category');
                    }
                    return category.removeDisk(diskId).then(() => category);
                });
            })
        };
    }
});


