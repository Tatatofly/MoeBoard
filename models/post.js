const mongoose = require('mongoose')

const Post = mongoose.model('Post', {
  title: String,
  content: String,
  image: String,
  date: Date,
  deleted: Boolean,
  lastBump: Date,
  replies: [mongoose.Schema.Types.ObjectId]
})

module.exports = Post