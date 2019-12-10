const mongoose = require('mongoose')

const Reply = mongoose.model('Reply', {
  post: String,
  content: String,
  date: Date,
  deleted: Boolean 
})

module.exports = Reply