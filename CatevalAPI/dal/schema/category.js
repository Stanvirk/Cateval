const mongoose = require('mongoose')

//TODO: move to DAL.
const categories = [
    { id: 1, code: 'A', description: 'Success' },
    { id: 2, code: 'B', description: 'Partial access' },
    { id: 1, code: 'F', description: 'No context provided' }
];

const categorySchema = new mongoose.Schema({
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
});

const Category = mongoose.model('Categories', categorySchema);

module.exports = Category;