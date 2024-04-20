import categoryController from './controllers';
import categoryMiddlewares from './validation-middleware';
import express from 'express';

const router = express.Router();

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.post(
  '/',
  categoryMiddlewares.validateCreateCategory,
  categoryController.createCategory
);
router.put(
  '/:id',
  categoryMiddlewares.validateUpdateCategory,
  categoryController.updateCategory
);
router.delete('/:id', categoryController.deleteCategory);

export default router;