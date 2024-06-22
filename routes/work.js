const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Work = require('../controllers/Work')

router.get('/', auth.verifyToken, Work.all)
router.get('/:id', auth.verifyToken, Work.detail)
router.post('/', auth.verifyToken, Work.add)
router.delete('/:id', auth.verifyToken, Work.remove)

module.exports = router