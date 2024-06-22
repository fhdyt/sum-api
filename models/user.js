'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    User.init({
        user_username: DataTypes.STRING,
        user_password: DataTypes.STRING,
        user_name: DataTypes.STRING,


    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'user',
    });
    return User;
};

