const mongoose = require('mongoose')

const Post = mongoose.model('Post', {
  title: String,
  content: String,
  date: Date,
  deleted: Boolean,
  replies: [mongoose.Schema.Types.ObjectId]
})

module.exports = Post