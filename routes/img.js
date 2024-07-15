const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const ImgController = require('../controllers/Img')
const upload = require('../middlewares/upload')

router.post('/', upload.array('photo', 1), ImgController.addImg)
router.post('/pembayaran', upload.array('photo', 1), ImgController.pembayaran)
router.post('/proses', auth.verifyToken, ImgController.proses)
router.delete('/:id', auth.verifyToken, ImgController.deleteImg)

module.exports = router