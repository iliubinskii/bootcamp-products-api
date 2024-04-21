import { Router } from "express";
import ProductsController from "./controllers.js";
import validateData from "./validation-middleware.js";

const productsRouter = new Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.post(
  "/",

  getFileUploadMiddleware("photo1-file", "customPhoto1"),
  getCloudinaryStorageMiddleware("photo1", "customPhoto1"),

  getFileUploadMiddleware("photo2-file", "customPhoto2"),
  getCloudinaryStorageMiddleware("photo2", "customPhoto2"),

  getFileUploadMiddleware("photo3-file", "customPhoto3"),
  getCloudinaryStorageMiddleware("photo3", "customPhoto3"),

  validateData.createProduct,
  ProductsController.create
);
productsRouter.get("/:id", ProductsController.getOne);
productsRouter.put(
  "/",

  getFileUploadMiddleware("photo1-file", "customPhoto1"),
  getCloudinaryStorageMiddleware("photo1", "customPhoto1"),

  getFileUploadMiddleware("photo2-file", "customPhoto2"),
  getCloudinaryStorageMiddleware("photo2", "customPhoto2"),

  getFileUploadMiddleware("photo3-file", "customPhoto3"),
  getCloudinaryStorageMiddleware("photo3", "customPhoto3"),

  validateData.updateProduct,
  ProductsController.editProduct
);
productsRouter.delete("/:id", ProductsController.deleteProduct);

export default productsRouter;
