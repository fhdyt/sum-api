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
            res.json({ status: true, token, user: data });
        }
        else {
            res.json({ status: false, message: 'unknown' });
        }
    });
}

const list = async (req, res) => {
    try {
        const result = await User.findAll()
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }
}
const register = async (req, res) => {
    console.log(req.body)
    if (req.body.id == '') {
        try {
            const data = {
                user_username: req.body.user_username,
                user_name: req.body.user_name,
                user_phone: req.body.user_phone,
                user_password: bcrypt.hashSync(req.body.user_password, 8),
                role: req.body.role
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
    else {
        const data = {
            user_username: req.body.user_username,
            user_name: req.body.user_name,
            user_phone: req.body.user_phone,
            // user_password: bcrypt.hashSync(req.body.user_password, 8),
            role: req.body.role
        }
        const result = await User.update(data, {
            where: {
                id: req.body.id
            }
        })
        res.status(200);
        res.json(result)
    }
}
const detail = async (req, res) => {
    try {
        const result = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}
const verify = async (req, res) => {
    console.log('verify')
    res.json({ "status": true })
}

const logout = async (req, res) => {
    res.json({ "status": true })
}

const remove = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const result = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = { list, login, register, verify, logout, detail, remove }