import joiValidationMiddleware from "../crud/validation-middleware/joi.js";
import { categorySchema, updateCategorySchema } from "./validation-schema.js";

const validateCategory = joiValidationMiddleware(
  categorySchema,
  updateCategorySchema
);

export const validateCreateCategory = validateCategory.validateCreate;
export const validateUpdateCategory = validateCategory.validateUpdate;

export default {
  validateCreateCategory,
  validateUpdateCategory,
};
