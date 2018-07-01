const { Router} = require('express'),
    product = require('./product');
    
module.exports = (app) => {

    const router = Router();
    
    router.use('/product', product);

    return router;
};