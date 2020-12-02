const express = require('express')
const router = express.Router()
const getArticle = require('../controllers/getArticle')
const createArticle = require('../controllers/createArticle')

router.get('', getArticle)
router.post('', createArticle)

module.exports = router