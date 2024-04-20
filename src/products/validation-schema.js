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

function validateProduct(data) {
  const { error } = productSchema.validate(data);
  return error;
}

module.exports = {
  productSchema,
  validateProduct,
};
