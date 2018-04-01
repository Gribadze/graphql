import {
    nodeDefinitions,
    fromGlobalId
} from 'graphql-relay';
import models from '../../models';

export const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId(globalId);
        return models[type].findById(id);
    }
);
