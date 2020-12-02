const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() 

const login = async (req, res) => {
  try {
    const { email, password: inputPassword } = req.body
    const foundUser = await prisma.users.findUnique({ where: { email } })

    if (!foundUser) {
      const error = new Error('invalid input')
      error.statusCode = 400
      throw error
    }

    const { id, password: hashedPassword } = foundUser
    const isValidPassword = await bcrypt.compare(inputPassword, hashedPassword)

    if (!isValidPassword) {
      const error = new Error('invalid input')
      error.statusCode = 400
      throw error
    }

    const token = jwt.sign({ id }, 'node_blogs_secret_key', { expiresIn: '1h' })
    res.status(200).json({ message: 'login success', token })
  } catch (err) {
    res.status(err.statusCode).json({ message: err.message })
  }
}

module.exports = login