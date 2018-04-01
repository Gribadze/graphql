export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CategoryDisks', {
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            category_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Categories',
                    key: 'id',
                    as: 'category_id'
                }
            },
            disk_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Disks',
                    key: 'id',
                    as: 'disk_id'
                }
            }
        });
    },
    down: (queryInterface/*, Sequelize*/) => {
        return queryInterface.dropTable('CategoryDisks');
    }
};