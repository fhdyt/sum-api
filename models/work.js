'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Work extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    Work.init({
        perusahaan: DataTypes.STRING,
        order: DataTypes.STRING,
        bahan: DataTypes.STRING,
        ukuran_panjang: DataTypes.INTEGER,
        ukuran_lebar: DataTypes.INTEGER,
        // detail: DataTypes.STRING,
        finishing: DataTypes.STRING,
        desain: DataTypes.STRING

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'work',
    });
    return Work;
};

