export default (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING
    }, {});
    Category.associate = function(models) {
        Category.belongsToMany(models.Disk, {
            foreignKey: 'category_id',
            onDelete: 'CASCADE',
            through: models.CategoryDisk
        });
    };
    return Category;
};