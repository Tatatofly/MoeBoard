const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postRouter = require('./controllers/posts')
const config = require('./utils/config')

const app = express()

mongoose.connect(config.mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(express.static('build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/post', postRouter)


app.on('close', () => {
    // TODO: Close connection to DB
    mongoose.connection.close()
})
  

module.exports = app