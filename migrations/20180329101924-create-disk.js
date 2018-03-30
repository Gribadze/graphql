export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
            .then(() => {
                return queryInterface.createTable('Disks', {
                    id: {
                        primaryKey: true,
                        type: Sequelize.UUID,
                        defaultValue: Sequelize.literal('uuid_generate_v4()')
                    },
                    name: {
                        allowNull: false,
                        type: Sequelize.STRING
                    },
                    createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE
                    }
                });
            });
    },
    down: (queryInterface/*, Sequelize*/) => {
        return queryInterface.dropTable('Disks');
    }
};