import { graphql } from 'graphql';
import schema from '../schema';

let diskId;
let categoryId;

it('createDisk test', async () => {
    const createCategory = `
        mutation {
            createCategory(input: { name: "testCategory" }) {
                category {
                    id
                    name
                }
            }
        }
    `;
    const { data: categoryData } = await graphql(schema, createCategory, {}, {});
    categoryId = categoryData.createCategory.category.id;

    const mutation = `
        mutation {
            createDisk(input: { name: "testDisk", categoryId: "${categoryId}" }) {
                disk {
                    id
                    name
                    categories {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                }    
            }
        }
    `;
    const { data } = await graphql(schema, mutation, {}, {});
    diskId = data.createDisk.disk.id;
    expect(data.createDisk.disk.name).toBe("testDisk");
    expect(data.createDisk.disk.categories.edges[0].node.name).toBe("testCategory");
});

it('updateDisk test', async () => {
    const mutation = `
        mutation {
            updateDisk(input: { id: "${diskId}", name: "testDiskUpdated" }) {
                disk {
                    name
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.updateDisk.disk.name).toBe("testDiskUpdated");
});

it('deleteDisk test', async () => {
    const mutation = `
        mutation {
            deleteDisk(input: { id: "${diskId}" }) {
                disk {
                    id
                }
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.deleteDisk.disk.id).toBe(diskId);
});
