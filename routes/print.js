const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Print = require('../controllers/Print')

router.get('/', auth.verifyToken, Print.all)
router.get('/:id', auth.verifyToken, Print.detail)
router.post('/', auth.verifyToken, Print.add)
router.delete('/:id', auth.verifyToken, Print.remove)

module.exports = router