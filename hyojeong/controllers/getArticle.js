const getArticle = async (req, res) =>{
  try {
    
    res.status(200).json({ message: "200" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = getArticle