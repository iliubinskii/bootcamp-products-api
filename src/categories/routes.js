import categoryController from "./controllers";
import categoryMiddlewares from "./validation-middleware";
import express from "express";

const router = express.Router();

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);
router.post(
  "/",

  getFileUploadMiddleware("categoryImage-file", "customCategoryImage"),
  getCloudinaryStorageMiddleware("categoryImage", "customCategoryImage"),

  categoryMiddlewares.validateCreateCategory,
  categoryController.createCategory
);
router.put(
  "/:id",
  getFileUploadMiddleware("categoryImage-file", "customCategoryImage"),
  getCloudinaryStorageMiddleware("categoryImage", "customCategoryImage"),

  categoryMiddlewares.validateUpdateCategory,
  categoryController.updateCategory
);
router.delete("/:id", categoryController.deleteCategory);

export default router;
