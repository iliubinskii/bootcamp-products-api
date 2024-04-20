const Joi = require("joi");

const categoryName = Joi.string().required(); // Renamed for clarity

const categorySchema = Joi.object({
  id: Joi.string().allow(null), // Optional for creation
  name: categoryName,
});

function validateCategory(data, isUpdate = false) {
  const schema = isUpdate ? categorySchema.optional() : categorySchema; // Adjust schema based on update flag
  const { error } = schema.validate(data);
  return error;
}

module.exports = {
  categorySchema,
  validateCategory,
};
