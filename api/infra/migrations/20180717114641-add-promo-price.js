'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'products',
            'promoPrice',
            Sequelize.FLOAT
        );
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.removeColumn(
            'products',
            'promoPrice'
        );
    }
};
