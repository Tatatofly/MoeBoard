const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const config = require('./utils/config')
const postRouter = require('./controllers/posts')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })

const app = express()

app.use('/api/posts', postRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  // TODO: Server running
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  // TODO: Close connection to DB
  mongoose.connection.close()
})


module.exports = {
  app, server
}