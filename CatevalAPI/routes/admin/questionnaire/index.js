const router = require('express').Router();
const debug = require('debug')('app.controller.data');
const QuestionnaireAccessor = require('../../../dal/acessors/questionnaire');

const questionnaireAccessor = new QuestionnaireAccessor();

//TODO: move operations related to compiled service to separate controller?
router.get('/:code', async (req, res) => {
    debug(`Find by code request:\n${JSON.stringify(req.params)}`);
    const questionnaire = await questionnaireAccessor.findByCode(req.params.code);
    if (!questionnaire) {
        debug(`No questionnaire found`);
        return res.status(404).send('Questionnaire with the given code not found');
    }
    debug(`Entity found:\n${JSON.stringify(category)}`);
    res.send(questionnaire);
});

router.post('/', async (req, res) => {
    debug(`Add new entity:\n${JSON.stringify(req.params)}`);
    //TODO: add validation 
    //const { error } = validator.validateCategory(req.body);
    // if (error) {
    //     debug(`Create request errors:\n${JSON.stringify(error)}`);
    //     return res.status(400).send(error.details[0].message);
    // }

    const newQuestionnaire = await questionnaireAccessor
        .create(req.body.code, req.body.description);
    debug(`New entity created:\n${JSON.stringify(newCategory)}`);
    res.send(newCategory);
});

module.exports = router;