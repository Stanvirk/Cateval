const { boolean } = require('joi');
const mongoose = require('mongoose');
const Question = require('./question');

const Questionnaire = mongoose.model('Questionnaires',
    new mongoose.Schema({
        code: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 20
        },
        //TODO: does questionnaire need description? Or keep "conext details out of api" philosophy
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 255
        },
        single:{
            type: Boolean,
            required:false,
            default:false
        },
        questions:{
            type: [mongoose.Schema.Types.ObjectId],
            ref: Question.modelName
        }
    })
);

module.exports = Questionnaire;