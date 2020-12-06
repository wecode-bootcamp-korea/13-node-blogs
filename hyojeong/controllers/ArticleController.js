const { ArticleService } = require('../services')

const postArticle = async (req, res, next) => {
  try {
    const { id: user_id } = req.foundUser
    const { title, body } = req.body;

    const createdArticle = await ArticleService.createArticle({
      user_id,
      title,
      status : 'PUBLISHED',
      body
    })

    res.status(201).json({ createdArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getArticles = async (req, res, next) => {
  try {
    const articles = await ArticleService.findArticles()

    res.status(200).json({ articles })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateArticle = async (req, res, next) => {
  try {
    const { article_id } = req.params
    const { title, body } = req.body;

    const updatedArticle = await ArticleService.updateArticle({
      article_id,
      title,
      body
    })

    res.status(201).json({ updatedArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteArticle = async (req, res, next) => {
  try {
    const { article_id } = req.params

    const deletedArticle = await ArticleService.deleteArticle(article_id)

    res.status(201).json({ deletedArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


module.exports = {
  postArticle,
  getArticles,
  updateArticle,
  deleteArticle
}