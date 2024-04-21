import { Router } from "express";
import ProductsController from "./controllers.js";
import validateData from "./validation-middleware.js";
import getUplodMiddleware from "./multer/index.js";
import cloudinaryService from "./cloudinary/service.js";
import logger from "../logger.js";

const productsRouter = new Router();
productsRouter.post(
  "/images",
  getUplodMiddleware("image-file"),
  async (req, res) => {
    logger.info(JSON.stringify({ body: req.body, file: req.file }));
    logger.info(`Received request to upload image: ${req.file.originalname}`);
    // upload to cloudinary
    const result = await cloudinaryService.uploadImage(req.file.path, "");
    if (!result) {
      return res.status(500).send("Image upload failed");
    }
    res.send(result);
  }
);
productsRouter.get("/", ProductsController.getAll);
productsRouter.post("/", validateData.createProduct, ProductsController.create);
productsRouter.get("/:id", ProductsController.getOne);
productsRouter.put(
  "/",
  validateData.updateProduct,
  ProductsController.editProduct
);
productsRouter.delete("/:id", ProductsController.deleteProduct);

export default productsRouter;
