const postRouter = require('express').Router()
const Post = require('../models/post')
const Reply = require('../models/reply')

// TODO: Getters for collection of posts with condition matching posts
// TODO: Post method for posting and deleting a post
postRouter.get('/', async (request, response) => {
  const posts = await Post
    .find({})

  response.json(posts)
})

postRouter.get('/reply', async (request, response) => {
  const reply = await Reply
    .find({})

  response.json(reply)
})

// Get single post with id
postRouter.get('/:id', async (request, response) => {
  const post = await Post.findById(request.params.id)
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'Malformatted id' })
    })

  try {
    if (post) {
      response.json(post)
    } else{
      response.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
  }
})

// Post single post
postRouter.post('/', async (request, response) => {
  const { title, content } = request.body

  try {

    if (title === undefined ||  content === undefined) {
      return response.status(400).json({ error: 'Title or content is missing'})
    }

    const post = new Post({ title: title, content: content, date: new Date(), deleted: false} )
    const result = await post.save()

    response.status(201).json(result)
  } catch (exception) {
      console.log(exception)
      response.status(500).json({ error: 'Something went wrong...' })
  }
})

// Post reply to a post
postRouter.post('/:id', async (request, response) => {
  const post = await Post.findById(request.params.id)
  .catch(error => {
    console.log(error)
    response.status(400).send({ error: 'Malformatted id' })
  })

  try {
    if (post) {

      const { content } = request.body

      try {
    
        if (content === undefined) {
          return response.status(400).json({ error: 'Content is missing'})
        }
    
        const reply = new Reply({ post: request.params.id, content: content, date: new Date(), deleted: false } )
        const result = await reply.save()
    
        response.status(201).json(result)
      } catch (exception) {
          console.log(exception)
          response.status(500).json({ error: 'Something went wrong...' })
      }

    } else{
      response.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
  }
})

module.exports = postRouter