const Category = require('../schema/category');
const debug = require('debug')('app.services.category');
const BaseService = require('./base');


class CategoryService extends BaseService {
    constructor() {
        super();
    }

    async create(code, description) {
        try {
            return await new Category({
                code,
                description
            }).save();
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while creating an entity\n${JSON.stringify(ex)}`);
        }
    }

    async findByCode(code) {
        try {
            return await Category
                .find({ code })
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while searching an entity\n${JSON.stringify(ex)}`);
        }
    }

    async getList(filter) {
        //TODO:convert filter to query filter
        try {
            return await Category.find({})
                .sort('name');
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while returning a list\n${JSON.stringify(ex)}`);
        }
    }

    async deleteByCode(code) {
        try {
            return await Category.deleteOne({ code });
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while deletiing an entity\n${JSON.stringify(ex)}`);
        }
    }
}

module.exports = CategoryService;