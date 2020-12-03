const router = require('express').Router();
const debug = require('debug')('app.controller.eval');


router.get('/', async (req, res) => {
    debug(`Evaluate questionnaire:\n${JSON.stringify(req.params)}`);
    
    //TODO: Service call for evaluation service
    const evaluation = { 
        category: 'A',
        trace: '2241e9cf-a3ef-45e6-882c-330dc9ff0a49'
    };

    res.send(evaluation);
});

module.exports = router;