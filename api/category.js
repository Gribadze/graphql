import models from '../models';

export const getCategoryById = id => {
    return models.Category.findById(id);
};

export const getAllCategories = (/*args*/) => {
    return models.Category.findAll();
};

export const getDisksByCategory = id => {
    return getCategoryById(id).then(currentDisk => currentDisk.getDisks());
};

export const createCategory = category => {
    return models.Category.create(category);
};

export const updateCategory = (id, category) => {
    return getCategoryById(id).then(currentCategory => {
        return currentCategory.update(category);
    });
};

export const deleteCategory = id => {
    return getCategoryById(id).then(category => {
        return category.destroy().then(() => category);
    });
};

export const addDiskToCategory = (diskId, categoryId) => {
    return getCategoryById(categoryId).then(category => {
        return category.addDisk(diskId);
    });
};

export const removeDiskFromCategory = (diskId, categoryId) => {
    return getCategoryById(categoryId).then(category => {
        return category.removeDisk(diskId);
    });
};