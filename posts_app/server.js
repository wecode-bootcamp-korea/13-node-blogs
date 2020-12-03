const http = require('http')
const express = require('express')
let { posts } = require('./db')
const app = express()

app.use(express.json())
app.get('/posts', (req, res) => {
  res.json({ posts })
})

app.post('/posts', (req, res) => {
  const { username, title, description } = req.body

  const created = {
    id: posts.length + 1,
    username,
    title,
    description,
  }

  posts = [...posts, created]

  res.status(201).json({ created })
})

app.get('/posts/:id', (req, res) => {
  const { id } = req.params

  res.status(200).json({ post: posts.find((post) => post.id === Number(id)) })
})

app.put('/posts/:id', (req, res) => {
  const { id } = req.params

  let modifed

  posts = posts.map((post) => {
    if (post.id !== Number(id)) return post

    modifed = {
      ...post,
      ...req.body,
    }

    return modifed
  })

  res.status(201).json({ modifed })
})

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params

  let deleted

  posts = posts.filter((post) => {
    if (post.id !== Number(id)) return true

    deleted = post
    return false
  })

  res.status(201).json({ deleted })
})

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})
