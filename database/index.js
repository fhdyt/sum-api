const { Sequelize } = require("sequelize");
const {
    DB,
    USER,
    PASSWORD,
    HOST,
    DIALECT,
} = require("../configs/db.config");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/user')(sequelize, Sequelize);
db.Eo = require('../models/eo')(sequelize, Sequelize);
db.Work = require('../models/work')(sequelize, Sequelize);
db.Print = require('../models/print')(sequelize, Sequelize);
db.Barang = require('../models/barang')(sequelize, Sequelize);
db.Satulayar = require('../models/satulayar')(sequelize, Sequelize);
db.Satulayar_barang = require('../models/satulayar_barang')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;