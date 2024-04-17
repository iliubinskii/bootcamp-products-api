import userController from './controllers.js';
import userMiddlewares from './validation-middleware.js';
import express from 'express';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post(
  '/users',
  userMiddlewares.validateCreateUser,
  userController.createUser
);
router.put(
  '/users/:id',
  userMiddlewares.validateUpdateUser,
  userController.updateUser
);
router.delete('/users/:id', userController.deleteUser);

export default router;