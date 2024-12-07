const Joi = require('joi');
const JoiObjectId = require('joi-objectid');

// Extend Joi with the ObjectId validator
Joi.objectId = JoiObjectId(Joi);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(user);
};

const validateLogin = (req) => {
  const schema = Joi.object({
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(req);
};

const validateProduct = (product) => {
  const schema = Joi.object({
    user: Joi.objectId().required(),
    name: Joi.string().min(5).max(255).required(),
    image: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().min(0).required(),
    numReview: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    countInStock: Joi.number().min(0).required(),
  });

  return schema.validate(product);
};

module.exports = {
  validateUser,
  validateLogin,
  validateProduct,
};
