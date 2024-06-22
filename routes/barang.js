const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Barang = require('../controllers/Barang')

router.get('/', auth.verifyToken, Barang.all)
router.get('/:id', auth.verifyToken, Barang.detail)
router.post('/', auth.verifyToken, Barang.add)
router.delete('/:id', auth.verifyToken, Barang.remove)

module.exports = router