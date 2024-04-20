const Joi = require("joi");

const userName = Joi.string().required();
const userEmail = Joi.string().email().required();

const userSchema = Joi.object({
  id: Joi.string().allow(null), // Optional for creation
  name: userName,
  email: userEmail,
  products: Joi.array().items(productSchema), // reference the existing productSchema
});

function validateUser(data, isUpdate = false) {
  const schema = isUpdate ? userSchema.optional() : userSchema; // Adjust schema based on update flag
  const { error } = schema.validate(data);
  return error;
}

module.exports = {
  userSchema,
  validateUser,
};
