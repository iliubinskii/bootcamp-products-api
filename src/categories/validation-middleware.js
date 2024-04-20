import joiValidationMiddleware from "../crud/validation-middleware/joi";
import { categorySchema, updateCategorySchema } from "./validation-schema";

const validateCategory = joiValidationMiddleware(categorySchema, updateCategorySchema);

export const validateCreateCategory = validateCategory.validateCreate;
export const validateUpdateCategory = validateCategory.validateUpdate;

export default {
    validateCreateCategory,
    validateUpdateCategory,
}