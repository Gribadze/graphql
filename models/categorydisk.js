export default (sequelize/*, DataTypes*/) => {
    const CategoryDisk = sequelize.define('CategoryDisk', {}, {});
    CategoryDisk.associate = function(models) {
        CategoryDisk.belongsTo(models.Category, {
            foreignKey: 'category_id',
            onDelete: 'CASCADE'
        });
        CategoryDisk.belongsTo(models.Disk, {
            foreignKey: 'disk_id',
            onDelete: 'CASCADE'
        });
    };
    return CategoryDisk;
};