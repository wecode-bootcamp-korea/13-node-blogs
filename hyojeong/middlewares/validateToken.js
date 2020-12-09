const { UserService } = require('../services')
const AUTH_TOKEN_SALT = "secret key"
const jwt = require('jsonwebtoken')

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const { id } = jwt.verify(token, AUTH_TOKEN_SALT)
    const foundUser = await UserService.findUser({ id }) 

    if (!foundUser){ res.status(404).json({ message: 'user not found' }) }

    req.foundUser = foundUser
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = validateToken
