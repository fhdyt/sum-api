'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Eo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    Eo.init({
        kegiatan: DataTypes.STRING,
        venue: DataTypes.STRING,
        konsep: DataTypes.STRING,
        venue_panjang: DataTypes.INTEGER,
        venue_lebar: DataTypes.INTEGER,
        kapasitas_orang: DataTypes.INTEGER,
        panggung_lebar: DataTypes.INTEGER,
        panggung_panjang: DataTypes.INTEGER,
        kapasitas_sound: DataTypes.INTEGER,
        kelengkapan: DataTypes.STRING,

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'eo',
    });
    return Eo;
};

