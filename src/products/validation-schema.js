const Joi = require("joi");

const productId = Joi.string().required();
const productName = Joi.string().required();
const productPrice = Joi.number().required();

const productSchema = Joi.object({
  id: productId,
  name: productName,
  price: productPrice,
  category: Joi.array().items(Joi.string()), // reference category by ID (string)
});

const categoryId = Joi.string().required();

const categorySchema = Joi.object({
  id: categoryId,
  name: Joi.string().required(),
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
