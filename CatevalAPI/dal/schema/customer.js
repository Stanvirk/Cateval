const mongoose = require('mongoose')
//TODO: 1. Think out a better name for customers who owns a questionnaires and manages them.
//TODO: 2. Work out specs to determine what need to be saved for customer
const Customer = mongoose.model('Customers',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 255
        },
        key: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255
        },
        disabledFrom: {
            type: Date,
            required: false
        }
    })
);

exports = Customer;