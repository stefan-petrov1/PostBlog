const Post = require('../models/Post');

function getAll() {
  return Post.find().lean();
}

exports.postService = {
  getAll
};
