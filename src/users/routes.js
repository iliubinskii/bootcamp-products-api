import { getCloudinaryStorageMiddleware } from "../global-middleware/cloudinary-storage.js";
import { getFileUploadMiddleware } from "../global-middleware/file-upload.js";
import userController from "./controllers.js";
// import userMiddlewares from './validation-middleware.js';
import userMiddlewares from "./validation-middleware.js";
import express from "express";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post(
  "/",
  getFileUploadMiddleware("profilePicture-file", "customProfilePicture"),
  getCloudinaryStorageMiddleware("profilePicture", "customProfilePicture"),
  userMiddlewares.validateCreateUser,
  userController.createUser
);
router.put(
  "/:id",
  getFileUploadMiddleware("profilePicture-file", "customProfilePicture"),
  getCloudinaryStorageMiddleware("profilePicture", "customProfilePicture"),
  userMiddlewares.validateUpdateUser,
  userController.updateUser
);
router.delete("/:id", userController.deleteUser);

export default router;
