import categoryController from "./controllers.js";
import categoryMiddlewares from "./validation-middleware.js";
import express from "express";

const router = express.Router();

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);
router.post(
  "/",
  categoryMiddlewares.validateCreateCategory,
  categoryController.createCategory
);
router.put(
  "/:id",
  categoryMiddlewares.validateUpdateCategory,
  categoryController.updateCategory
);
router.delete("/:id", categoryController.deleteCategory);
router.get("/:id/products", categoryController.getCategoryProducts);

export default router;
