const { RuleGroup, Rule } = require('../schema/rule');
const debug = require('debug')('app.services.customer');
const BaseService = require('./base');


class RulesService extends BaseService {
    constructor() {
        super();
    }

}

exports = RulesService;