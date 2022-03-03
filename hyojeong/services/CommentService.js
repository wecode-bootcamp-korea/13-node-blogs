const prisma = require('../prisma')

const createCommentOfArticle = ({ article_id, user_id, body }) => {
  return prisma.comments.create({
    data: {
      body,
      articles: {
        connect: {
          id: Number(article_id),
        },
      },
      users: {
        connect: {
          id: user_id,
        },
      },
    },
  })
}

module.exports = {
  createCommentOfArticle,
}