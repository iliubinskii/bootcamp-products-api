import userService from './service.js';
import crudControllers from '../crud/controllers.js';


const userController = crudControllers(userService);

export const getUsers = userController.getItems;
export const getUserById = userController.getItemById;
export const createUser = userController.createItem;
export const updateUser = userController.updateItem;
export const deleteUser = userController.deleteItem;

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    };