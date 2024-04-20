import userController from './controllers.js';
// import userMiddlewares from './validation-middleware.js';
import userMiddlewares from './validation-middleware.js';
import express from 'express';

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post(
  '/',
  userMiddlewares.validateCreateUser,
  userController.createUser
);
router.put(
  '/:id',
  userMiddlewares.validateUpdateUser,
  userController.updateUser
);
router.delete('/:id', userController.deleteUser);

export default router;
