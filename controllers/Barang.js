const { Barang } = require('../database/index');

const all = async (req, res) => {
    try {
        const result = await Barang.findAll()
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}

const detail = async (req, res) => {
    try {
        const result = await Barang.findOne({
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
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar,
    }
    console.log
    if (req.body.id == '') {
        try {
            const result = await Barang.create(data)
            res.status(200);
            res.json(result)
        }
        catch (err) {
            console.log(err)
            res.json({ "error": err })
        }
    } else {

        const result = await Barang.update(data, {
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
        const result = await Barang.destroy({
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
module.exports = { all, add, detail, remove }