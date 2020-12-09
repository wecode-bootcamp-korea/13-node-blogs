const prisma = require('../prisma')

const createArticle = (fields) => {
  return prisma.articles.create({
    data: {
      title: fields.title,
      status : 'PUBLISHED',
      body: fields.body,
      users: {
        connect: {
          id: fields.user_id,
        },
      },
    },
  })
}

const findArticles = (field) => {
  return prisma.articles.findMany({
    where: {
      deleted_at: null
    }
  })
}

const findArticle = (field) => {
  const [uniqueKey] = Object.keys(field)
  const value = uniqueKey === 'id' ? Number(field[uniqueKey]) : field[uniqueKey]

  return prisma.articles.findUnique({
    where: { [uniqueKey]: value },
    include: {
      users: {
        select: {
          id: true,
          email: true,
        },
      },
      comments: {
        where: {
          deleted_at: null,
        },
      },
    },
  })
}

const updateArticle = (fields) => {
  const { article_id, title, body } = fields

  return prisma.articles.update({
    where: {
      id: Number(article_id),
    },
    data: {
      title,
      body,
      updated_at: new Date(),
    },
  })
}

const deleteArticle = (article_id) => {
  return prisma.articles.update({
    where: {
      id: Number(article_id),
    },
    data: {
      deleted_at: new Date(),
    },
  })
}

module.exports = {
  createArticle,
  findArticles,
  findArticle,
  updateArticle,
  deleteArticle
}