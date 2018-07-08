const errorHandler = require('../infra/util/error-handler');
const productHelper = require('./helpers/product');

const product = {};

/**
 * 
 * @param {*} models 
 */
product.get = (models) => {

    return new Promise(async (resolve, reject) => {

        const products = await productHelper.getAll(models.product);

        if (products) {
            resolve(products);
        } else {
            reject(errorHandler.internalServerError());
        }
    });
};

/**
 * @desc Get products using parameters to search
 * @param {*} models 
 * @param {*} parameters 
 */
product.search = (models, parameters) => {

    return new Promise(async (resolve, reject) => {

        try {
            const products = await productHelper.search(models.product, parameters);
            const totalProducts = await productHelper.count(models.product, parameters.value);
            resolve({
                products: products,
                total: totalProducts
            });            
        } catch(error) {
            reject(errorHandler.internalServerError(error));
        }
    });
};

module.exports = product;