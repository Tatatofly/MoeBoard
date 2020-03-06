const mongoose = require('mongoose')

const Post = mongoose.model('Post', {
  title: String,
  content: String,
  date: Date,
  deleted: Boolean,
  lastBump: Date,
  replies: [mongoose.Schema.Types.ObjectId]
})

module.exports = Post