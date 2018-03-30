export default (sequelize, DataTypes) => {
    const Disk = sequelize.define('Disk', {
        name: DataTypes.STRING
    }, {});
    Disk.associate = function(models) {
        Disk.belongsToMany(models.Category, {
            foreignKey: 'disk_id',
            onDelete: 'CASCADE',
            through: models.CategoryDisk
        });
    };
    return Disk;
};