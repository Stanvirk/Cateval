const Questionnaire = require('../schema/questionnaire');
const debug = require('debug')('app.services.questionnaire');
const BaseService = require('./base');

class QuestionnaireService extends BaseService {
    constructor() {
        super();
    }

    //TODO: Questionnare should be filtered by user
    //TODO: Should return compiled questionnare with embedded questiuons and user name
    async findByCode(code, user) {
        try {
            return await Questionnaire
                .find({ code })
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while searching an entity\n${JSON.stringify(ex)}`);
        }
    }
    //TODO: add compile operation which chechs that all questions used in categories are defined

}

module.exports = QuestionnaireService;