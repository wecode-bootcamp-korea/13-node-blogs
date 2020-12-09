const prisma = require('../prisma')

const findUser = (field) => {
  const [uniqueKey] = Object.keys(field)
  const value = uniqueKey === 'id' ? Number(field[uniqueKey]) : field[uniqueKey]

  return prisma.users.findUnique({ where: { [uniqueKey]: value } })
}

module.exports = {
  findUser,
}