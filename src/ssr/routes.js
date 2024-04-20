import { Router } from 'express';
import ProductsController from './controllers.js';
import validateData from './validation-middleware.js';

const productsRouter = new Router();

productsRouter.get('/', ProductsController.getAll);
productsRouter.post('/', validateData.createProduct, ProductsController.create);
productsRouter.get('/:id', ProductsController.getOne);
productsRouter.put(
  '/',
  validateData.updateProduct,
  ProductsController.editProduct
);
productsRouter.delete('/:id', ProductsController.deleteProduct);

export default productsRouter;
