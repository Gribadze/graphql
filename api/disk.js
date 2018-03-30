import models from '../models';
import {getCategoryById} from "./category";

export const getDiskById = id => {
    return models.Disk.findById(id);
};

export const getAllDisks = (/*args*/) => {
    return models.Disk.findAll();
};

export const getCategoriesByDisk = disk => {
    return getDiskById(disk.id).then(currentDisk => currentDisk.getCategories());
};

export const createDisk = (disk, categories) => {
    if (categories.length === 0) {
        throw new Error('categories can\'t be empty');
    }
    return models.Disk.create(disk).then(newDisk => {
        return newDisk.setCategories(categories).then(() => newDisk);
    });
};

export const updateDisk = (id, disk) => {
    return getDiskById(id).then(currentDisk => {
        return currentDisk.update(disk);
    });
};

export const deleteDisk = id => {
    return getDiskById(id).then(disk => {
        return disk.destroy().then(() => disk);
    });
};