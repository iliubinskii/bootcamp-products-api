import { string, object, array } from "joi";

const userId = string().required();
const userName = string().required();
const userEmail = string().email().required();

const userSchema = object({
  id: userId,
  name: userName,
  email: userEmail,
  products: array().items(productSchema), // reference the existing productSchema
});

function validateUser(data, isUpdate = false) {
  const schema = isUpdate ? userSchema.optional() : userSchema; // Adjust schema based on update flag
  const { error } = schema.validate(data);
  return error;
}

export default {
  userSchema,
  validateUser,
};
