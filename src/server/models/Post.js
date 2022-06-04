const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  author: { required: true, type: mongoose.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
