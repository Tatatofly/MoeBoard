const postRouter = require('express').Router()
const Post = require('../models/post')
const Reply = require('../models/reply')

// TODO: Post method for deleting a post and reply
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

// Get single reply with id
postRouter.get('/reply/:id', async (request, response) => {
  const reply = await Reply.findById(request.params.id)
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'Malformatted id' })
    })

  try {
    if (reply) {
      response.json(reply)
    } else{
      response.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
  }
})

// Get replies of a post
postRouter.get('/:id/reply', async (request, response) => {
  const reply = await Reply
    .find({'post':request.params.id})
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'Malformatted id' })
    })

  try {
    if (reply) {
      response.json(reply)
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

    const post = new Post({ title: title, content: content, date: new Date(), deleted: false, replies: []} )
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

        // Add new reply to Posts list of replies
        await Post.findByIdAndUpdate(request.params.id, {$push: {replies: [reply]} })
    
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

// Mark post as deleted
postRouter.delete('/:id', (request, response, next) => {
  const body = request.body

  const postObj = {
    title: body.title,
    content: body.content,
    date: body.date,
    deleted: true 
  }

  Post.findByIdAndUpdate(request.params.id, postObj)
    .then(deletedPost => {
      response.json(deletedPost.toJSON())
    })
    .catch(error => next(error))
})

// Delete post
postRouter.delete('/:id/delete', (request, response, next) => {
  Post.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Mark reply as deleted
postRouter.delete('/reply/:id', (request, response, next) => {
  const body = request.body

  const replyObj = {
    post: body.post,
    content: body.content,
    date: body.date,
    deleted: true 
  }

  Reply.findByIdAndUpdate(request.params.id, replyObj)
    .then(deleteReply => {
      response.json(deleteReply.toJSON())
    })
    .catch(error => next(error))
})

// Delete reply
postRouter.delete('/reply/:id/delete', (request, response, next) => {
  Reply.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = postRouter