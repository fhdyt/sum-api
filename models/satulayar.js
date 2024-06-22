'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Satulayar extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    Satulayar.init({
        kegiatan: DataTypes.STRING,
        tanggal_pemesanan: DataTypes.DATE,
        tanggal_pengembalian: DataTypes.DATE,
        jumlah_hari: DataTypes.STRING,
        pengantaran: DataTypes.STRING,
        pengantaran_harga: DataTypes.INTEGER,
        lokasi: DataTypes.STRING,
        lokasi_harga: DataTypes.INTEGER,
        total_barang: DataTypes.INTEGER,
        total: DataTypes.INTEGER

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'satulayar',
    });
    return Satulayar;
};

