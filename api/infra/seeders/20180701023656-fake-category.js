'use strict';
const values = require('../defaults/category');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', values, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
  }
};
