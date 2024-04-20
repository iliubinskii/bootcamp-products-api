import crudControllers from "../crud/controllers";
import categoryService from "./service";

const categoryController = crudControllers(categoryService);


export const getCategories = categoryController.getItems;
export const getCategoryById = categoryController.getItemById;
export const createCategory = categoryController.createItem;
export const updateCategory = categoryController.updateItem;
export const deleteCategory = categoryController.deleteItem;

export default {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};