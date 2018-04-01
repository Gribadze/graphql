export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Disks', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
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
    },
    down: (queryInterface/*, Sequelize*/) => {
        return queryInterface.dropTable('Disks');
    }
};