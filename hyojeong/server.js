const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect()
  }
}

start()