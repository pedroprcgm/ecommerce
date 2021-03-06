const Op = require('sequelize').Op;

const helper = {};

// Defaults to query
const DEFAULT_PAGE_SIZE = 24;
const DEFAULT_COLUMN_ORDER = 'id';
const DEFAULT_ORDER = 'ASC';

/**
 * @desc Get all products
 * @param {*} model 
 */
helper.getAll = async (models, parameters) => {

    const filter = {
        order: [[DEFAULT_COLUMN_ORDER, DEFAULT_ORDER]],
    };

    if (parameters.page) {
        parameters.page = parameters.page > 1 ? parameters.page - 1 : 0;
        parameters.size = parameters.size ? parseInt(parameters.size) : DEFAULT_PAGE_SIZE;

        filter.offset = parameters.page * parameters.size;
        filter.limit = parameters.size;
    }

    filter.include = [{
        model: models.category
    }];
    
    const productList = await models.product
        .findAll(filter)
        .then(productList => {
            return productList;
        })
        .catch(err => { console.log(err); throw Error(err); });
    return productList;
};

/**
 * @desc Set defaults to parameters
 * @param {*} params 
 */
const _prepareParameters = (params) => {

    const parameters = Object.assign({}, params);

    parameters.page = params.page > 1 ? params.page - 1 : 0;
    parameters.order = params.order ? params.order : DEFAULT_COLUMN_ORDER;
    parameters.size = parseInt(params.size) || DEFAULT_PAGE_SIZE;
    parameters.desc = params.desc === true ? 'DESC' : 'ASC';

    return parameters;
};

/**
 * @desc Get products using parameters
 * @param {*} model 
 * @param {*} parameters 
 */
helper.search = async (models, params) => {
    const parameters = _prepareParameters(params);

    const products = await models.product
        .findAll({
            where: {
                [Op.or]: [{
                    name: {
                        [Op.like]: '%' + parameters.value + '%'
                    }
                }, {
                    description: {
                        [Op.like]: '%' + parameters.value + '%'
                    }
                }],
            },
            order: [[parameters.order, parameters.desc]],
            offset: parameters.page * parameters.size,
            limit: parameters.size,
            include: [{
                model: models.category
            }]
        })
        .then(products => {
            return products;
        })
        .catch(err => { reject(err) });

    return products;
};

/**
 * @desc Get the total of itens for a query in name and description fields
 * @param {*} model 
 * @param {*} value 
 */
helper.count = async (model, value) => {

    if (!value) {
        value = '';
    }

    const count = await model
        .count({
            where: {
                [Op.or]: [{
                    name: {
                        [Op.like]: '%' + value + '%'
                    }
                }, {
                    description: {
                        [Op.like]: '%' + value + '%'
                    }
                }],
            }
        })
        .then(total => {
            return total;
        })
        .catch(err => {
            throw Error(err);
        });

    return count;
};

module.exports = helper;