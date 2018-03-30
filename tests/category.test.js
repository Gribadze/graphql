import { graphql } from 'graphql';
import schema from '../schema';

let categoryId;

it('createCategory test', async () => {
    const mutation = `
        mutation {
            createCategory(category: { name: "test" }) {
                id
                name
            }
        }
    `;
    const { data } = await graphql(schema, mutation, {}, {});
    categoryId = data.createCategory.id;
    expect(data.createCategory.name).toBe("test");
});

it('updateCategory test', async () => {
    const mutation = `
        mutation {
            updateCategory(id: "${categoryId}", category: { name: "testUpdated" }) {
                name
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.updateCategory.name).toBe("testUpdated");
});

it('deleteCategory test', async () => {
    const mutation = `
        mutation {
            deleteCategory(id: "${categoryId}") {
                id
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.deleteCategory.id).toBe(categoryId);
});
