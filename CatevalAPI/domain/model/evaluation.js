const Joi = require('joi')
// {
//     "code": "NGX2",
//     "answers":[
//         {
//             "code":"Q1",
//             "value":false
//         }
// }

function validateEvaluation(evaluation) {
    const schema = {
        code: Joi.string().min(5).max(50).required(),
        //answers:
    };
  
    return Joi.validate(evaluation, schema);
  }
  
  exports.validate = validateEvaluation;