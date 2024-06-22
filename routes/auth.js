const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const AuthController = require('../controllers/Auth')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.get('/verify', auth.verifyToken, AuthController.verify)
router.get('/logout', auth.destroyToken, AuthController.logout)

module.exports = router