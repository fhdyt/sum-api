const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Eo = require('../controllers/Eo')

router.get('/', auth.verifyToken, Eo.all)
router.get('/:id', auth.verifyToken, Eo.detail)
router.post('/', auth.verifyToken, Eo.add)
router.delete('/:id', auth.verifyToken, Eo.remove)

module.exports = router