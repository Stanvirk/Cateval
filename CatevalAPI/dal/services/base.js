const mongoose = require('mongoose');

class BaseService {
    constructor() {
        //TODO:give rapameters for db connection (read from configs)
        //TODO: because of prototype inheritance this should be created once, but need to check that. Otherwise need to move to property or elswhere
        mongoose.connect('mongodb://localhost/playground',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('Connected to MongoDB...'))
            .catch((err) => console.error('Could not connect to database:', err));
    }
}

exports = BaseService;
