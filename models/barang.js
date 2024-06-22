'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Barang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    Barang.init({
        nama: DataTypes.STRING,
        harga: DataTypes.INTEGER,
        gambar: DataTypes.STRING

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'barang',
    });
    return Barang;
};

