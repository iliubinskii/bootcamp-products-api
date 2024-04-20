const Joi = require("joi");

const productId = Joi.string().allow(null); // Optional for creation
const productName = Joi.string().required();
const productPrice = Joi.number().required();
const categoryId = Joi.string().allow(null); // Optional for creation, references category ID

const productSchema = Joi.object({
  id: productId,
  name: productName,
  price: productPrice,
  category: Joi.array().items(categoryId).max(2), // Maximum 2 categories
});

function validateProduct(data, isUpdate = false) {
  const schema = isUpdate ? productSchema.optional() : productSchema; // If true, all becomes optional
  const { error } = schema.validate(data);
  return error;
}

module.exports = {
  productSchema,
  validateProduct,
};