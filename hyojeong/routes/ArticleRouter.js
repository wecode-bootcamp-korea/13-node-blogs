const express = require('express')
const router = express.Router()
const { ArticleController, CommentController } = require('../controllers')
const { validateToken } = require('../middlewares')

router.get('/', ArticleController.getArticles)
router.post('/', validateToken, ArticleController.postArticle)
router.put('/:article_id', validateToken, ArticleController.updateArticle)
router.delete('/:article_id', validateToken, ArticleController.deleteArticle)

router.post('/:article_id/comments', validateToken, CommentController.postComment)

module.exports = router