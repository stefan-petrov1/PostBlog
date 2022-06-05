const { ApiError } = require('../config/errors/ApiError');
const { ValidationError } = require('mongoose').Error;
const Post = require('../models/Post');

async function create(postData) {
  try {
    // After adding authentication
    // Make the Post get saved into the user.posts

    return await Post.create(postData);
  } catch (e) {
    if (e instanceof ValidationError) {
      throw ApiError.badRequest(e.message);
    }

    throw e;
  }
}

exports.postService = {
  create
};
