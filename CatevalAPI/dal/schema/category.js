const mongoose = require('mongoose');
const RuleGroup = require('./rule-group');

const Category = mongoose.model('Categories',
    new mongoose.Schema({
        code: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 10,
            uppercase: true
        },
        description: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255
        },
        rootGroupId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: RuleGroup.modelName
        }
    })
);

module.exports = Category;