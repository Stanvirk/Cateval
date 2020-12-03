const router = require('express').Router();
const debug = require('debug')('app.controller.data');
const QuestionnaireAccessor = require('../../dal/acessors/questionnaire');

const questionnaireAccessor = new QuestionnaireAccessor();

//TODO: move operations related to compiled service to separate controller?
router.get('/questionnaire/:code', async (req, res) => {
    debug(`Find by code request:\n${JSON.stringify(req.params)}`);
    const questionnaire = await questionnaireAccessor.findByCode(req.params.code);
    if (!questionnaire) {
        debug(`No questionnaire found`);
        return res.status(404).send('Questionnaire with the given code not found');
    }
    debug(`Entity found:\n${JSON.stringify(questionnaire)}`);
    res.send(questionnaire);
});

module.exports = router;