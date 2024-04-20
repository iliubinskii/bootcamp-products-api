const categoryId = Joi.string().required();

const categorySchema = Joi.object({
  id: categoryId,
  name: Joi.string().required(),
});

function validateCategory(data) {
  const { error } = categorySchema.validate(data);
  return error;
}

module.exports = {
  categorySchema,
  validateCategory,
};
