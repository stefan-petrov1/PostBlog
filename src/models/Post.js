const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    minlength: [3, '{VALUE} must be at least 3 characters.'],
    maxlength: [100, '{VALUE} mustn\'t be more than 100 characters.']
  },
  description: {
    required: true,
    type: String,
    minlength: [10, '{VALUE} must be at least 10 characters.'],
    maxlength: [500, '{VALUE} mustn\'t be more than 500 characters.']
  },
  author: { required: true, type: mongoose.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
