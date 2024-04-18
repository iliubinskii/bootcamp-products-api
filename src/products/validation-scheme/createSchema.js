import Joi from 'joi';
const urlRegExp =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/i;

const createSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(150).required(),
  price: Joi.number().required(),
  image: Joi.string().pattern(new RegExp(urlRegExp)),
  category: Joi.array().items(Joi.string().allow(null)),
});

export default createSchema;
