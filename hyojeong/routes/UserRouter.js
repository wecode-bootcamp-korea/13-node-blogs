const express = require('express')
const router = express.Router()
const login = require('../controllers/login')
const signup = require('../controllers/signup')

router.post('/login', login)
router.post('/signup', signup)

module.exports = router