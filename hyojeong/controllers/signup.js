const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() 

const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const createdUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({
      user: {
        id: createdUser.id,
        email: createdUser.email,
      },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = signup