const createArticle = async (req, res) =>{
  try {
    const {id, user_id, title, body} = req.body;

    const createArticle = await prisma.articles.create({
      data : {
        id : id + 1,
        user_id,
        title,
        body
      }
    })

    res.status(201).json({ message: "201" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = createArticle