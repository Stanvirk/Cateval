const mongoose = require('mongoose');

class BaseService {
    constructor() {
        //TODO:give rapameters for db connection (read from configs)
        mongoose.connect('mongodb://localhost/playground',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('Connected to MongoDB...'))
            .catch((err) => console.error('Could not connect to database:', err));
    }
}

module.exports = BaseService;
