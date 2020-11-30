const mongoose = require('mongoose');
const CompareType = require('../../common/enums/compare-type');

/**
 * ValueProvider:Value[:param1][:param2]...
 * Where 
 * ValueProvider:Value - required
 * [:param1] - optonal
 */
const valueProviderExp = /^[A-z]+(([:][A-z0-9]+)+)$/;

const Rule = mongoose.model('Rules',
    new mongoose.Schema({
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 255
        },
        operation:{
            type:String,
            required:true,
            enum:[
                CompareType.L,
                CompareType.LE,
                CompareType.E,
                CompareType.G,
                CompareType.GE
            ]
        },
        target: {
            type: String,
            required:true,
            match:valueProviderExp 
        },
        source: {
            type: String,
            required:true,
            match:valueProviderExp 
        },
        invert:{
            type: Boolean,
            required:false,
            default:false
        }
    })
);

module.exports = Rule;