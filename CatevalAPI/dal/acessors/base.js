const mongoose = require('mongoose');

//TODO:give rapameters for db connection (read from configs)
//TODO: because of prototype inheritance this should be created once, but need to check that. Otherwise need to move to property or elswhere
mongoose.connect('mongodb://192.168.0.27/cateval',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to database:', err));

class BaseAccessor {
    constructor() {
        
    }
}

module.exports = BaseAccessor;
