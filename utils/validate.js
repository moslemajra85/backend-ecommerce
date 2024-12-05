const Joi = require('joi');

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

const validatePoroduct = (products) => {

 
}

module.exports = {
  validateUser,
  validateLogin,
};
