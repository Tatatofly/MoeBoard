const postRouter = require('express').Router()
const multer = require('multer')
const Post = require('../models/post')
const Reply = require('../models/reply')

// Multer settings
const dir = './images/'

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, dir)
  },
  filename: (request, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, fileName)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (request, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  }
})

postRouter.get('/', async (request, response) => {
  const posts = await Post
    .find({'deleted': false})
    .sort({lastBump: -1})
  response.json(posts)
})

postRouter.get('/reply', async (request, response) => {
  const reply = await Reply
    .find({'deleted': false})

  response.json(reply)
})

// Get single post with id
postRouter.get('/:id', async (request, response) => {
  try {
    const post = await Post.findById(request.params.id)

    if (!post) {
      return response.status(404)
    }

    return response.json(post)
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'Malformatted id' })
  }

})

// Get single reply with id
postRouter.get('/reply/:id', async (request, response) => {
  try {
    const reply = await Reply.findById(request.params.id)

    if (!reply) {
      return response.status(404)
    }

    return response.json(reply)
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'Malformatted id' })
  }
})

// Get replies of a post
postRouter.get('/:id/reply', async (request, response) => {
  try {
    const reply = await Reply.find({'post':request.params.id, 'deleted': false})

    if (!reply) {
      return response.status(404)
    }

    return response.json(reply)
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'Malformatted id' })
  }
})

// Post single post
postRouter.post('/', upload.single('postFile'), async (request, response) => {
  try {
    let { title, content } = request.body

    if (content === undefined || content.length < 1) {
      return response.status(400).json({ error: 'Content is missing'})
    }

    if(title === undefined || title.length < 1) {
      title = content.substring(0,50)
    }

    if(!request.file) {
      const post = new Post({ title: title, content: content, date: new Date(), deleted: false, lastBump: new Date(), replies: []} )
      const result = await post.save()
      response.status(201).json(result)
    } else {
      // TODO: file handling security, limits, errors || SECURITY NOT SAFE AT ALL
      const post = new Post({ title: title, content: content, image: request.file.filename, date: new Date(), deleted: false, lastBump: new Date(), replies: []} )
      const result = await post.save()
      response.status(201).json(result)
    }
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Something went wrong...' })
  }
})

// Post reply to a post
postRouter.post('/:id', upload.single('postFile'), async (request, response) => {
  const post = await Post.findById(request.params.id)
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'Malformatted id' })
    })

  try {
    if (post) {

      const { content } = request.body

      try {
    
        if (content === undefined || content.length < 1) {
          return response.status(400).json({ error: 'Content is missing'})
        }

        if(!request.file) {
          const reply = new Reply({ post: request.params.id, content: content, date: new Date(), deleted: false } )
          const result = await reply.save()
          // Add new reply to Posts list of replies
          await Post.findByIdAndUpdate(request.params.id, {lastBump: new Date(),$push: { replies: [reply]} })
    
          response.status(201).json(result)
        } else {
          // TODO: file handling security, limits, errors || SECURITY NOT SAFE AT ALL
          const reply = new Reply({ post: request.params.id, content: content, image: request.file.filename, date: new Date(), deleted: false } )
          const result = await reply.save()
          // Add new reply to Posts list of replies
          await Post.findByIdAndUpdate(request.params.id, {lastBump: new Date(),$push: { replies: [reply]} })
    
          response.status(201).json(result)
        }
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
  const postObj = {
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
  const replyObj = {
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