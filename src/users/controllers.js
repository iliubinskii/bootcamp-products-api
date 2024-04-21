import userService from "./service.js";
import productService from "../products/services.js";
import crudControllers from "../crud/controllers.js";

const userController = crudControllers(userService);

export const getUsers = userController.getItems;
export const getUserById = userController.getItemById;
export const createUser = userController.createItem;
export const updateUser = userController.updateItem;
export const deleteUser = userController.deleteItem;
export const getUserProducts = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getItemById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const products = await Promise.all(
    user.products.map((productId) => productService.getItemById(productId))
  );
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserProducts,
};
