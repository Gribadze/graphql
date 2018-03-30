import { graphql } from 'graphql';
import schema from '../schema';

it('createDisk test', async () => {
    const mutation = `
        mutation {
            createDisk(disk: { name: "test" }, categories: []) {
                name
            }
        }
    `;
    const { data } = await graphql(schema, mutation, {}, {});
    expect(data.createDisk.name).toBe("test");
});

it('updateDisk test', async () => {
    const result = await graphql(schema, `{ disks { id } }`);
    const diskId = result.data.disks[0].id;
    const mutation = `
        mutation {
            updateDisk(id: "${diskId}", disk: { name: "testUpdated" }) {
                name
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.updateDisk.name).toBe("testUpdated");
});

it('deleteDisk test', async () => {
    const result = await graphql(schema, `{ disks { id name } }`);
    const { id: diskId, name } = result.data.disks[0];
    const mutation = `
        mutation {
            deleteDisk(id: "${diskId}") {
                name
            }
        }
    `;
    const { data } = await graphql(schema, mutation);
    expect(data.deleteDisk.name).toBe(name);
});
