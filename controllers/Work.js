const { Work } = require('../database/index');

const all = async (req, res) => {
    try {
        const result = await Work.findAll({
            where: {
                user_id: req.user.data['id']
            }
        })
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}
const allAdmin = async (req, res) => {
    try {
        const result = await Work.findAll({
            include: ['user']
        })
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}

const detail = async (req, res) => {
    try {
        const result = await Work.findOne({
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

const add = async (req, res) => {
    console.log(req.body)
    const data = {
        perusahaan: req.body.perusahaan,
        order: req.body.order,
        bahan: req.body.bahan,
        ukuran_panjang: req.body.ukuran_panjang,
        ukuran_lebar: req.body.ukuran_lebar,
        // detail: req.body.detail,
        finishing: req.body.finishing,
        desain: req.body.desain,
        user_id: req.user.data['id']
    }
    console.log
    if (req.body.id == '') {
        try {
            const result = await Work.create(data)
            res.status(200);
            res.json(result)
        }
        catch (err) {
            console.log(err)
            res.json({ "error": err })
        }
    } else {

        const result = await Work.update(data, {
            where: {
                id: req.body.id
            }
        })
        res.status(200);
        res.json(result)
    }
}


const remove = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const result = await Work.destroy({
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
module.exports = { all, allAdmin, add, detail, remove }