const mongoose = require('mongoose')

const Reply = mongoose.model('Reply', {
  post: String,
  content: String,
  image: String,
  date: Date,
  deleted: Boolean 
})

module.exports = Reply