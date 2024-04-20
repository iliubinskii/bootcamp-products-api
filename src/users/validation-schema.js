import { string, object, array } from "joi";

const userId = string().required();
const userName = string().required();
const userEmail = string().email().required();

const userSchema = object({
  id: userId,
  name: userName,
  email: userEmail,
  products: array().items({ type: mongoose.Schema.Types.ObjectId, ref: 'category' }), 
});

const updateUserSchema = object({
  name: userName,
  email: userEmail,
  products: array().items({ type: mongoose.Schema.Types.ObjectId, ref: 'category' }), 
  description: Joi.string().min(50).max(1000).optional(),
}).min(1);

function validateUser(data, isUpdate = false) {
  const schema = isUpdate ? updateUserSchema : userSchema; 
  const { error } = schema.validate(data);
  return error;
}

export default {
  userSchema,
  validateUser,
  updateUserSchema,
};
