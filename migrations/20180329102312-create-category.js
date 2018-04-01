export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            name: {
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
        return queryInterface.dropTable('Categories');
    }
};