const prisma = require('../prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AUTH_TOKEN_SALT = "secret key"

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

    const token = jwt.sign({ id }, AUTH_TOKEN_SALT, { expiresIn: '6h' })
    res.status(200).json({ message: 'login success', token })
  } catch (err) {
    res.status(err.statusCode).json({ message: err.message })
  }
}

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

module.exports = {
  login,
  signup
}