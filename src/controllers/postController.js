const { ApiError } = require("../config/errors/ApiError");
const { postService } = require("../services/postService");
const { ValidationError } = require('mongoose').Error;

function renderCreate(req, res, next) {
  res.render('createPost');
}

async function create(req, res, next) {
  try {
    // Only for testing purposes
    // Later when i add authentication and authorization
    // will attach the user to the req object

    req.body.authorId = '629ca5594c87262acafd8c2c';
    await postService.create(req.body);

    res.redirect('/');
  } catch (err) {
    if (err instanceof ValidationError) {
      return next(ApiError.badRequest(err.message));
    }

    next(err);
  }
}

exports.postController = {
  renderCreate,
  create
};
