const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers')

router.post('/login', UserController.login)
router.post('/signup', UserController.signup)

module.exports = router