'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Print extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    Print.init({
        kegiatan: DataTypes.STRING,
        cetak: DataTypes.STRING,
        bahan: DataTypes.STRING,
        ukuran_panjang: DataTypes.INTEGER,
        ukuran_lebar: DataTypes.INTEGER,
        finishing: DataTypes.STRING,
        desain: DataTypes.STRING

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'print',
    });
    return Print;
};
