const { Router } = require('express'),
    router = Router(),
    product = require('../app/product');

/** 
 * @desc Get all products
 * @return Ok - Status 200 - Product
 * @return Error - Status 500
 */
router.get('/', (req, res, next) => {

    product
        .get(req.models, {
            page: req.query.page,
            size: req.query.size
        })
        .then(products => res.send(products))
        .catch(err => {
            if (err.code === 400) { 
                res.boom.badRequest(err.msg);
            } else {
                res.boom.badImplementation(err.err);
            }
        });
});

/**
 * @desc 
 * @return
 */
router.get('/search/:value', (req, res, next) => {

    product
        .search(req.models, {
            value: req.params.value,
            order: req.query.order,
            size: req.query.size,
            page: req.query.page,
            desc: req.query.desc
        })
        .then(products => res.send(products))
        .catch(err => {
            if (err.code === 400) { 
                res.boom.badRequest(err.msg);
            } else {
                res.boom.badImplementation(err.err);  
            } 
        });
});

module.exports = router;