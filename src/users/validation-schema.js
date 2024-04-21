import Joi from 'joi';
import mongoose from 'mongoose';

const userId = Joi.string().required();
const userName = Joi.string().required();
const userEmail = Joi.string().email().required();

export const userSchema = Joi.object({
  id: userId,
  name: userName,
  email: userEmail,
  products: Joi.array().items({ type: mongoose.Schema.Types.ObjectId, ref: 'product' }), 
});

export const updateUserSchema = Joi.object({
  name: userName.optional(),
  email: userEmail.optional(),
  products: Joi.array().items({ type: mongoose.Schema.Types.ObjectId, ref: 'product' }).optional(), 
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
