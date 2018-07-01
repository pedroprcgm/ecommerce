const errorHandler = require('../infra/util/error-handler');

const product = {};

const _getAll = async (model) => {
    const productList = await model.findAll()
        .then(productList => {
            return productList;
        })
        .catch(err => { throw Error(err) });
    return productList;
};

product.get = (models) => {
    return new Promise(async (resolve, reject) => {
        const products = await _getAll(models.product);
        if (products) resolve(products)
        else reject(errorHandler.internalServerError());
    });
};

module.exports = product;