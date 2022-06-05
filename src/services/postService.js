const Post = require('../models/Post');

async function create(postData) {
  // After adding authentication
  // Make the Post gets saved into the user.posts
  return await Post.create(postData);
}

exports.postService = {
  create
};
