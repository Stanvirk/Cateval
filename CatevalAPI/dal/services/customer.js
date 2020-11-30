const Customer = require('../schema/customer');
const debug = require('debug')('app.services.customer');
const BaseService = require('./base');

class CustomerService extends BaseService {
    constructor() {
        super();
    }

    async create(name, description) {
        try {
            const existingCustomer =
                await this.findByName(name);

            if (existingCustomer)
                throw new Error(`Customer name:${name} is already taken`);

            return await new Customer({
                name,
                key: generateApiKey(),
                description
            }).save();
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while creating an entity\n${JSON.stringify(ex)}`);
        }
    }

    async findByName(name) {
        try {
            return await Customer
                .find({ name })
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while searching an entity\n${JSON.stringify(ex)}`);
        }
    }

    async disable(id) {
        try {
            return await Customer.findByIdAndUpdate(id, {
                disabledFrom: Date.now
            })
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while updating a list\n${JSON.stringify(ex)}`);
        }
    }

    isActive(customer) {
        return Date.now < customer.disabledFrom;
    }

    async isValidAuth(name, key) {
        try {
            const customer = await Customer
                .find({ name, key });

            if (!customer)
                return false;

            return this.isActive(customer);
        } catch (ex) {
            //TODO:Add error handling error
            debug(`Error while validatin an entity\n${JSON.stringify(ex)}`);
        }
        return false;
    }
}

module.exports = CustomerService;