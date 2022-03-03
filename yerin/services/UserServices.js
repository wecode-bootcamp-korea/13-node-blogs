const prisma = require('../prisma')

const createUser = (fields) => {
  return prisma.users.create({ fields })
}

const findUser = (field) => {
    return prisma.users.findOne({ where: { field } })
}

module.exports = {
  createUser,
  findUser
}