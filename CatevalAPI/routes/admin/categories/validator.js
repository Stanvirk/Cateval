const Joi = require('joi');
const debug = require('debug')('app:core.controller.admin.categories.validation');

//TODO: Validation should be also separated
function validateCategory(category) {
    const schema = Joi.object({
        code: Joi.string()
            .min(1)
            .max(5)
            .required(),
        description: Joi.string()
            .max(255)
            .optional()
    });

    return schema.validate(category);
}

module.exports.validateCategory = validateCategory;