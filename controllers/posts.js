const postRouter = require('express').Router()
const Post = require('../models/post')

postRouter.get('/', async (request, response) => {
  const posts = await Post
    .find({})

  response.json(posts)
})

module.exports = postRouter