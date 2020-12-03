const _ = require('lodash');

const debug = require('debug')('app.accessor.questionnaire');
const Questionnaire = require('../schema/questionnaire');
const Question = require('../schema/question');
const BaseAccessor = require('./base');

class QuestionnaireAccessor extends BaseAccessor {
    constructor() {
        super();
    }

    //TODO: Questionnare should be filtered by user
    //TODO: Should return compiled questionnare with embedded questiuons and user name

    //CREATE
    async addQuestionnaire(code,description){
        try {
            return await new Questionnaire({
                code,
                description
            }).save();
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while creating an entity\n${JSON.stringify(ex)}`);
        }
    }

    //READ
    async findByCode(code, user) {
        try {
            return await Questionnaire
                .find({ code })
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while searching an entity\n${JSON.stringify(ex)}`);
        }
    }

    //UPDATE
    async updateQuestionnaire(id, description, questions) {
        const questionnaire = 
            await Questionnaire
            .populate(Question.modelName)
            .findById(id);
        if (!questionnaire)
            return;

        questionnaire.description = 
            description || questionnaire.description;

        //TODO: Overwrite entirely or merge values?
        //TODO: Is it possible to use some lodash merge method?
        //_.mergeWith(questionnaire.questions,questions,foo);
        _.forEach(questions,(key,value) =>{
            const question = questionnaire
                .questions.find(q => q.code === value.code);
            if(question){

            }else{

            }
        })

        try{
            
            return await questionnaire.save();
        }catch{            
            debug(`Error while saving an entity\n${JSON.stringify(ex)}`);
        }
    }
    //TODO: add compile operation which chechs that all questions used in categories are defined
}

module.exports = QuestionnaireAccessor;