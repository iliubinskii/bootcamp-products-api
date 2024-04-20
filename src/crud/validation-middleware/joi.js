export default function joiValidationMiddleware(joiCreateSchema, joiUpdateSchema) {
  return {
    validateCreate: (req, res, next) => {
      const { error } = joiCreateSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      next();
    },
    validateUpdate: (req, res, next) => {
      const { error } = joiUpdateSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      next();
    },

  };
}

