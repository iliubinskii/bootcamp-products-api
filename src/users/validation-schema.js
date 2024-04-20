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

export default userSchema;
