const joi = require("joi");

const schemaBody = joi.object({
  phone: joi.string().required(),

  tipo: joi.string().valid("1", "2", "3").required(),

  parameters: joi
    .array()
    .items(
      joi.object({
        type: joi.string().valid("text").required(),
        text: joi.string().required(),
      })
    )
    .min(5)
    .required(),

  midia: joi.array().items(
    joi.alternatives().try(
      joi.object({
        type: joi.string().valid("document").required(),
        document: joi.object({
          filename: joi.string().required(),
          link: joi.string().uri().required(),
        }),
      }),
      joi.object({
        type: joi.string().valid("image").required(),
        image: joi.object({
          link: joi.string().uri().required(),
        }),
      })
    )
  ),
});

module.exports = schemaBody;
