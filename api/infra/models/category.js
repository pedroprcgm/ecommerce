'use strict';
module.exports = (sequelize, DataTypes) => {
    var category = sequelize.define('category', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    return category;
};