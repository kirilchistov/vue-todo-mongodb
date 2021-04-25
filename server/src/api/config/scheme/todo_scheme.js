const Joi = require('joi');

const scheme = Joi.object({
  todo: Joi.string(),
  done: Joi.boolean().required(),
});

module.exports = scheme;
