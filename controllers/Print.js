const { Print } = require('../database/index');

const all = async (req, res) => {
    try {
        const result = await Print.findAll({
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
        const result = await Print.findAll({
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
        const result = await Print.findOne({
            where: {
                id: req.params.id
            },
            include: ['user']
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
        kegiatan: req.body.kegiatan,
        cetak: req.body.cetak,
        bahan: req.body.bahan,
        bahan_harga: req.body.bahan_harga,
        ukuran_panjang: req.body.ukuran_panjang,
        ukuran_lebar: req.body.ukuran_lebar,
        finishing: req.body.finishing,
        desain: req.body.desain,
        total: req.body.total,
        user_id: req.user.data['id']
    }
    console.log
    if (req.body.id == '') {
        try {
            const result = await Print.create(data)
            res.status(200);
            res.json(result)
        }
        catch (err) {
            console.log(err)
            res.json({ "error": err })
        }
    } else {

        const result = await Print.update(data, {
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
        const result = await Print.destroy({
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