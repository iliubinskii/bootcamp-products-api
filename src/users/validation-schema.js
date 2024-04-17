const Joi = require("joi");

const userId = Joi.string().required();
const userName = Joi.string().required();
const userEmail = Joi.string().email().required();

const userSchema = Joi.object({
  id: userId,
  name: userName,
  email: userEmail,
  products: Joi.array().items(productSchema), // reference the existing productSchema
});

module.exports = userSchema;
