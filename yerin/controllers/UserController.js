const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserService } = require('../services')

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
      
    const createdUser = await UserService.createUser({
        data: {
            email,
            password: hashedPassword,
          }
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

const logIn = async (req, res) => {
  try {  const { email, password: inputPassword } = req.body
  const foundUser = await UserService.findUser({ email })

  if (!foundUser) {
    const error = new Error('Who are you..?')
    error.statusCode = 400
    throw error
  }

  const { id, password: hashedPassword } = foundUser
  const isValidPassword = await bcrypt.compare(inputPassword, hashedPassword)

  if (!isValidPassword){
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



module.exports = {
  signUp,
  logIn,
}