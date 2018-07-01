'use strict';
module.exports = (sequelize, DataTypes) => {
    var product = sequelize.define('product', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    product.associate = function (models) {
        product.belongsTo(models.category);
    };
    return product;
};