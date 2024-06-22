const { User } = require('../database/index');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const data = await User.findOne({
        where: {
            user_username: req.body.username,
        }
    })

    if (!data) {
        return res.json({ status: false, message: 'Invalid Username' });
    }

    bcrypt.compare(req.body.password, data.user_password, function (err, result) {
        if (result) {
            const token = jwt.sign({ data }, 'MY_SECRET_KEY', { expiresIn: "3d" });
            res.json({ status: true, token });
        }
        else {
            res.json({ status: false, message: 'unknown' });
        }
    });
}

const register = async (req, res) => {
    console.log(req.body)
    try {
        const data = {
            user_username: req.body.username,
            user_password: bcrypt.hashSync(req.body.password, 8)
        }

        const result = await User.create(data)
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
        res.json({ "error": err })
    }
}

const verify = async (req, res) => {
    res.json({ "status": true })
}

const logout = async (req, res) => {
    res.json({ "status": true })
}

module.exports = { login, register, verify, logout }