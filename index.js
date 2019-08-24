const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

const config = require('./utils/config')
const postRouter = require('./controllers/posts')

const app = express()

app.use('/api/posts', postRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  // TODO: Server running
})

server.on('close', () => {
  // TODO: Close connection to DB
})

module.exports = {
  app, server
}