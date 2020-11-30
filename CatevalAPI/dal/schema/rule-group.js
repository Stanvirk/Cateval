const mongoose = require('mongoose');
const EvaluationType = require('../../common/enums/evaluation-type')
const Rule = require('./rule');

const model = 'RuleGroups';

const RuleGroup = mongoose.model(model,
    new mongoose.Schema({
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 255
        },
        operation:{
            type:String,
            enum:[
                EvaluationType.AND,
                EvaluationType.OR
            ]
        },
        rules:{
            type: [mongoose.Schema.Types.ObjectId],
            ref: Rule.modelName
        },
        groups:{
            type: [mongoose.Schema.Types.ObjectId],
            ref: model
        },
        invert:{
            type: Boolean
        }
    })
);

module.exports = RuleGroup;