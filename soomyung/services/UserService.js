const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = (fields) => {
  const { email, password } = fields.data;

  return prisma.users.create({
    data: {
      email,
      password,
    },
  });
};

const findUser = (fields) => {
  return prisma.users.findUnique(fields);
};

module.exports = {
  createUser,
  findUser,
};
