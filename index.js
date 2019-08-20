const http = require('http')
const express = require('express')
const config = require('./utils/config')

const app = express()

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