const express = require('express')
const router = express.Router()
const { ArticleController } = require('../controllers')
const { validateToken } = require('../middlewares')

router.get('/', ArticleController.getArticles)
router.post('/', validateToken, ArticleController.postArticle)
router.put('/:article_id', validateToken, ArticleController.updateArticle)
router.delete('/:article_id', validateToken, ArticleController.deleteArticle)

module.exports = router