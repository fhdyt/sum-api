'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Satulayar_barang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Satulayar_barang.belongsTo(models.Barang, {
                foreignKey: 'barang_id',
            })
        }
    }
    Satulayar_barang.init({
        satulayar_id: DataTypes.STRING,
        barang_id: DataTypes.STRING,
        qty: DataTypes.INTEGER,
        total: DataTypes.INTEGER

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'satulayar_barang',
    });
    return Satulayar_barang;
};

