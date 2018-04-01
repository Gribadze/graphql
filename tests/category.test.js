import { graphql } from 'graphql';
import schema from '../schema';

let diskId;
let categoryId;

it('createCategory test', async () => {
    const mutation = `
        mutation {
            createCategory(input: { name: "test" }) {
                category {
                    id
                    name
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation, {}, {});
    categoryId = data.createCategory.category.id;
    expect(data.createCategory.category.name).toBe("test");
});

it('updateCategory test', async () => {
    const mutation = `
        mutation {
            updateCategory(input: { id: "${categoryId}", name: "testUpdated" }) {
                category {
                    id
                    name
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.updateCategory.category.name).toBe("testUpdated");
});

it('addDiskToCategory test', async () => {
    const createDisk = `
        mutation {
            createDisk(input: { name: "testDisk", categoryId: "${categoryId}" }) {
                disk {
                    id
                }    
            }
        }
    `;
    const { data: diskData } = await graphql(schema, createDisk);
    diskId = diskData.createDisk.disk.id;

    const mutation = `
        mutation {
            addDiskToCategory(input: { diskId: "${diskId}", categoryId: "${categoryId}" }) {
                category {
                    disks(last: 1) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.addDiskToCategory.category.disks.edges[0].node.id).toBe(diskId);
});

it('deleteCategory test', async () => {
    const mutation = `
        mutation {
            deleteCategory(input: { id: "${categoryId}" }) {
                category {
                    id
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.deleteCategory.category.id).toBe(categoryId);
});

