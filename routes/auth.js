const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const AuthController = require('../controllers/Auth')

router.get('/', AuthController.list)
router.post('/login', AuthController.login)
router.post('/register', auth.verifyToken, AuthController.register)
router.post('/register-public', AuthController.register)
router.get('/:id', auth.verifyToken, AuthController.detail)
router.get('/verify', auth.verifyToken, AuthController.verify)
router.get('/logout', auth.destroyToken, AuthController.logout)
router.delete('/:id', auth.verifyToken, AuthController.remove)
module.exports = router