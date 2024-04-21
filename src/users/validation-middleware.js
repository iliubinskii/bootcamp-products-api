import joiValidationMiddleware from "../crud/validation-middleware/joi.js";
import { userSchema, updateUserSchema } from "./validation-schema.js";

const validateUser = joiValidationMiddleware(userSchema, updateUserSchema);

export const validateCreateUser = validateUser.validateCreate;
export const validateUpdateUser = validateUser.validateUpdate;

export default {
    validateCreateUser,
    validateUpdateUser,
}

