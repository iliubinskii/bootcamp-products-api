import { Router } from 'express';
import ProductsController from './controllers.js';

const productsRouter = new Router();

productsRouter.get('/', ProductsController.getAll);
productsRouter.post('/', ProductsController.create);
productsRouter.get('/:id', ProductsController.getOne);
productsRouter.put('/', ProductsController.editProduct);
productsRouter.delete('/:id', ProductsController.deleteProduct);

export default productsRouter;
