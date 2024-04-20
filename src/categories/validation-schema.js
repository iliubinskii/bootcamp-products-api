import Joi from 'joi';
import mongoose from 'mongoose';

const categoryName = Joi.string().required(); 

export const categorySchema = Joi.object({
  id: Joi.string().allow(null), 
  name: categoryName,
});

export const updateCategorySchema = Joi.object({
  name: categoryName.optional(),
  description: Joi.string().min(50).max(1000).optional(),
}).min(1);

function validateCategory(data, isUpdate = false) {
  const schema = isUpdate ? updateCategorySchema : categorySchema; 
  const { error } = schema.validate(data);
  return error;
}

export default {
  categorySchema,
  validateCategory,
  updateCategorySchema,
};
