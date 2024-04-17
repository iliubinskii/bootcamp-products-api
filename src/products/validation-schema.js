const Joi = require("joi");

const productId = Joi.string().required();
const productName = Joi.string().required();
const productPrice = Joi.number().required();

const productSchema = Joi.object({
  id: productId,
  name: productName,
  price: productPrice,
  category: Joi.array().items(Joi.string().allow(null)), // reference category by ID (string) and allow null for optional categories
});

const categoryId = Joi.string().required();

const categorySchema = Joi.object({
  id: categoryId,
  name: Joi.string().required(),
  products: Joi.array().items(productSchema),
});

function validateProduct(data) {
  const { error } = productSchema.validate(data);
  return error;
}

function validateCategory(data) {
  const { error } = categorySchema.validate(data);
  return error;
}

module.exports = {
  productSchema,
  categorySchema,
  validateProduct,
  validateCategory,
};
