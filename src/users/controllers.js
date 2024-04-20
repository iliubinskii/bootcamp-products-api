import userService from './service.js';
import crudControllers from '../crud/controllers.js';


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
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.products);
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserProducts
    };