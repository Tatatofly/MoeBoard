const postRouter = require('express').Router()
const Post = require('../models/post')

// TODO: Getters for single post, and collection of posts with condition matching posts
// TODO: Post method for posting and deleting a post
postRouter.get('/', async (request, response) => {
  const posts = await Post
    .find({})

  response.json(posts)
})

module.exports = postRouter