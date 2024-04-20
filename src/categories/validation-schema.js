import { string, object } from "joi";

const categoryName = string().required(); 

const categorySchema = object({
  id: string().allow(null), 
  name: categoryName,
});

const updateCategorySchema = object({
  name: categoryName,
  description: string().min(50).max(1000).optional(),
}).min(1);

function validateCategory(data, isUpdate = false) {
  const schema = isUpdate ? categorySchema.optional() : categorySchema; 
  const { error } = schema.validate(data);
  return error;
}

export default {
  categorySchema,
  validateCategory,
  updateCategorySchema,
};
