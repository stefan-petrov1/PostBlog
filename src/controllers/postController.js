const { postService } = require("../services/postService");

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
    next(err);
  }
}

exports.postController = {
  renderCreate,
  create
};
