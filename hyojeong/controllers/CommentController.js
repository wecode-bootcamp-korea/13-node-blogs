const { CommentService } = require('../services')

const postComment = async (req, res, next) => {
  try {
    const { article_id } = req.params
    const { body } = req.body
    const { id: user_id } = req.foundUser

    const createdComment = await CommentService.createCommentOfArticle({
      article_id,
      user_id,
      body,
    })

    res.status(201).json({ createdComment })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  postComment
}