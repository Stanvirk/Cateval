//TODO: Think out another name
const mongoose = require('mongoose');

const Question = mongoose.model('Questions',
    new mongoose.Schema({
        code: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 20
        },
        //TODO: does question need description? Or keep "conext details out of api" filosophy
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 255
        },
        value: {
            type: String,
            required:true
        },
        type: {
            type: String, //TODO: does nodejs supports storing types as data types.
            required:true
        }
    })
);

module.exports = Question;