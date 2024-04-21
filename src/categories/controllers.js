import crudControllers from "../crud/controllers.js";
import categoryService from "./service.js";
import productService from "../products/services.js";

const categoryController = crudControllers(categoryService);

export const getCategories = categoryController.getItems;
export const getCategoryById = categoryController.getItemById;
export const createCategory = categoryController.createItem;
export const updateCategory = categoryController.updateItem;
export const deleteCategory = categoryController.deleteItem;
export const getCategoryProducts = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const products = await productService.getProductsByCategory(categoryId);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export default {
  getCategoryProducts,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
