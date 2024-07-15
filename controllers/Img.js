
const fs = require('fs');
const { Eo, Work, Satulayar, Print } = require('../database/index');
const addImg = async (req, res) => {
    console.log(req.user)
    try {
        const files = req.files;
        const photos = [];

        res.status(200);
        res.json({ img: "uploads/" + files[0].filename })
    }
    catch (err) {
        console.log(err)
        res.json({ "error": err })
    }
}

const pembayaran = async (req, res) => {
    console.log(req.body)
    try {
        const files = req.files;
        console.log(files)
        const photos = [];
        if (req.body.tableDb == 'eo') {
            await Eo.update({
                status: 'Menunggu Konfirmasi',
                pembayaran: "uploads/" + files[0].filename
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'work') {
            await Work.update({
                status: 'Menunggu Konfirmasi',
                pembayaran: "uploads/" + files[0].filename
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'satulayar') {
            await Satulayar.update({
                status: 'Menunggu Konfirmasi',
                pembayaran: "uploads/" + files[0].filename
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'print') {
            await Print.update({
                status: 'Menunggu Konfirmasi',
                pembayaran: "uploads/" + files[0].filename
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else {
            console.log('tidak bisa upload')
        }
        res.status(200);
        res.json({ img: "uploads/" + files[0].filename })
    }
    catch (err) {
        console.log(err)
        res.json({ "error": err })
    }
}
const proses = async (req, res) => {
    console.log(req.body)
    try {
        if (req.body.tableDb == 'eo') {
            await Eo.update({
                status: req.body.status,
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'work') {
            await Work.update({
                status: req.body.status,
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'satulayar') {
            await Satulayar.update({
                status: req.body.status,
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else if (req.body.tableDb == 'print') {
            await Print.update({
                status: req.body.status,
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
        else {
            console.log('tidak bisa upload')
        }
        res.status(200);
        res.json({ status: 'success' })
    }
    catch (err) {
        console.log(err)
        res.json({ "error": err })
    }
}
const deleteImg = async (req, res) => {
    const file_name = req.params.id
    const filePath = `uploads/${file_name}`;
    try {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.status(404).json({ "error": "File not found" });
            } else {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ "error": "Failed to delete the file" });
                    } else {
                        res.status(200).json({ "status": true });
                    }
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": err });
    }
}

module.exports = {
    addImg,
    deleteImg,
    pembayaran,
    proses
}