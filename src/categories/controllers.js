import crudControllers from "../crud/controllers";
import categoryService from "./service";
import productService from "../products/service";

const categoryController = crudControllers(categoryService);


export const getCategories = categoryController.getItems;
export const getCategoryById = categoryController.getItemById;
export const createCategory = categoryController.createItem;
export const updateCategory = categoryController.updateItem;
export const deleteCategory = categoryController.deleteItem;
export const getCategoryProducts = async (req, res) => {
    const categoryId = req.params.id;
    const products = await productService.getProductsByCategory(categoryId);
    if (!products.length) {
      return res.status(404).json({ error: 'No products found for this category' });
    }
    res.json(products);
  }

export default {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};