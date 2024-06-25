const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Satulayar = require('../controllers/Satulayar')

router.get('/', auth.verifyToken, Satulayar.all)
router.get('/admin', auth.verifyToken, Satulayar.allAdmin)
router.get('/:id', auth.verifyToken, Satulayar.detail)
router.post('/', auth.verifyToken, Satulayar.add)
router.delete('/:id', auth.verifyToken, Satulayar.remove)

module.exports = router