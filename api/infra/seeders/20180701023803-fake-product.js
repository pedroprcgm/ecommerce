'use strict';

const values = require('../defaults/product');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products', values, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {});
    }
};
