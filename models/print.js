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
            Print.belongsTo(models.User, { foreignKey: 'user_id' })
        }
    }
    Print.init({
        kegiatan: DataTypes.STRING,
        cetak: DataTypes.STRING,
        bahan: DataTypes.STRING,
        bahan_harga: DataTypes.INTEGER,
        ukuran_panjang: DataTypes.INTEGER,
        ukuran_lebar: DataTypes.INTEGER,
        finishing: DataTypes.STRING,
        desain: DataTypes.STRING,
        total: DataTypes.STRING,
        user_id: DataTypes.STRING,
        pembayaran: DataTypes.STRING,
        status: DataTypes.STRING,
        est: DataTypes.STRING

    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'print',
    });
    return Print;
};

