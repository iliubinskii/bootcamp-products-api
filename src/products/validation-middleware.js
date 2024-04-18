import createSchema from './validation-scheme/createSchema.js';
import updateSchema from './validation-scheme/updateSchema.js';

const options = {
  abortEarly: false, // report all errors, not just the first
  stripUnknown: true, // remove unknown keys
};

function mapErrorDetailsToObj(details) {
  return details?.reduce((acc, err) => {
    acc[err.path] = err.message;
    return acc;
  }, {});
}

const createProduct = async (req, res, next) => {
  //logger.info(`Validating create book request body req:${req.uuid}`);
  try {
    const result = await createSchema.validateAsync(req.body, options);
    return next();
  } catch (error) {
    return res.status(500).json({ error: mapErrorDetailsToObj(error.details) });
  }
};

const updateProduct = async (req, res, next) => {
  //logger.info(`Validating create book request body req:${req.uuid}`);
  try {
    const result = await updateSchema.validateAsync(req.body, options);
    return next();
  } catch (error) {
    return res.status(500).json({ error: mapErrorDetailsToObj(error.details) });
  }
};

export default { createProduct, updateProduct };
