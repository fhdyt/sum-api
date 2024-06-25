const { Satulayar, Satulayar_barang } = require('../database/index');
const satulayar_barang = require('../models/satulayar_barang');

const all = async (req, res) => {
    try {
        // Menggunakan findAll untuk mendapatkan semua Satulayar
        const results = await Satulayar.findAll({
            where: {
                user_id: req.user.data['id']
            }
        });

        // Memastikan results tidak kosong
        if (!results || results.length === 0) {
            throw new Error('No Satulayar found');
        }

        // Membuat array untuk menyimpan hasil akhir
        const finalResults = [];

        // Iterasi melalui setiap Satulayar
        for (let i = 0; i < results.length; i++) {
            const result = results[i];

            // Menggunakan findAll untuk mencari Satulayar_barang berdasarkan satulayar_id dari result
            const barang = await Satulayar_barang.findAll({
                where: { satulayar_id: result.id }, // Menggunakan result.id sebagai satulayar_id
                include: ['barang']
            });

            // Menambahkan properti barang ke result
            result.dataValues.barang = barang;

            // Menambahkan result yang telah dimodifikasi ke dalam array finalResults
            finalResults.push(result);
        }

        // Mengirimkan respons dengan status 200 dan finalResults
        res.status(200).json(finalResults);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
const allAdmin = async (req, res) => {
    try {
        // Menggunakan findAll untuk mendapatkan semua Satulayar
        const results = await Satulayar.findAll({
            include: ['user']
        });

        // Memastikan results tidak kosong
        if (!results || results.length === 0) {
            throw new Error('No Satulayar found');
        }

        // Membuat array untuk menyimpan hasil akhir
        const finalResults = [];

        // Iterasi melalui setiap Satulayar
        for (let i = 0; i < results.length; i++) {
            const result = results[i];

            // Menggunakan findAll untuk mencari Satulayar_barang berdasarkan satulayar_id dari result
            const barang = await Satulayar_barang.findAll({
                where: { satulayar_id: result.id }, // Menggunakan result.id sebagai satulayar_id
                include: ['barang']
            });

            // Menambahkan properti barang ke result
            result.dataValues.barang = barang;

            // Menambahkan result yang telah dimodifikasi ke dalam array finalResults
            finalResults.push(result);
        }

        // Mengirimkan respons dengan status 200 dan finalResults
        res.status(200).json(finalResults);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

const detail = async (req, res) => {
    try {
        // Mengambil satu data dari Satulayar berdasarkan id
        const result = await Satulayar.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!result) {
            return res.status(404).json({ message: "Data not found" });
        }

        // Mengambil data barang yang terkait dengan satulayar_id
        const barang = await Satulayar_barang.findAll({
            where: { satulayar_id: result.id }, // Menggunakan result.id sebagai satulayar_id
            include: ['barang']
        });

        // Menambahkan properti barang ke result
        result.dataValues.barang = barang;

        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


const add = async (req, res) => {
    const data = {
        kegiatan: req.body.kegiatan,
        tanggal_pemesanan: req.body.tanggal_pemesanan,
        tanggal_pengembalian: req.body.tanggal_pengembalian,
        jumlah_hari: req.body.jumlah_hari,
        pengantaran: req.body.pengantaran,
        pengantaran_harga: req.body.pengantaran_harga,
        lokasi: req.body.lokasi,
        lokasi_harga: req.body.lokasi_harga,
        total_barang: req.body.total_barang,
        total: req.body.total,
        user_id: req.user.data['id']
    }
    if (req.body.id == '') {
        try {
            const result = await Satulayar.create(data)
            req.body.barang.map(async (barang) => {
                console.log(barang)
                return await Satulayar_barang.create({
                    satulayar_id: result.id, // Asosiasi dengan id dari Satulayar yang baru dibuat
                    barang_id: barang.barang['id'],
                    qty: barang.qty,
                    total: barang.total,
                });
            });
            res.status(200);
            res.json(result)
        }
        catch (err) {
            console.log(err)
            res.json({ "error": err })
        }
    } else {
        const result = await Satulayar.update(data, {
            where: {
                id: req.body.id
            }
        })
        Satulayar_barang.destroy({
            where: {
                satulayar_id: req.body.id
            }
        })
        req.body.barang.map(async (barang) => {
            console.log(barang)
            return await Satulayar_barang.create({
                satulayar_id: req.body.id, // Asosiasi dengan id dari Satulayar yang baru dibuat
                barang_id: barang.barang['id'],
                qty: barang.qty,
                total: barang.total,
            });
        });
        res.status(200);
        res.json(result)
    }
}


const remove = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const result = await Satulayar.destroy({
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