const { Eo } = require('../database/index');

const all = async (req, res) => {
    try {
        const result = await Eo.findAll()
        res.status(200);
        res.json(result)
    }
    catch (err) {
        console.log(err)
    }

}

const detail = async (req, res) => {
    try {
        const result = await Eo.findOne({
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
        kegiatan: req.body.kegiatan,
        venue: req.body.venue,
        konsep: req.body.konsep,
        venue_panjang: req.body.venue_panjang,
        venue_lebar: req.body.venue_lebar,
        kapasitas_orang: req.body.kapasitas_orang,
        panggung_lebar: req.body.panggung_lebar,
        panggung_panjang: req.body.panggung_panjang,
        kapasitas_sound: req.body.kapasitas_sound,
        kelengkapan: req.body.checkbox,
    }
    if (req.body.id == '') {
        try {
            const result = await Eo.create(data)
            res.status(200);
            res.json(result)
        }
        catch (err) {
            console.log(err)
            res.json({ "error": err })
        }
    } else {

        const result = await Eo.update(data, {
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
        const result = await Eo.destroy({
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