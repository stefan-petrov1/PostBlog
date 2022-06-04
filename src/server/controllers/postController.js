const { postService } = require("../services/postService");

async function getAll(req, res, next) {
  try {
    const posts = await postService.getAll();
    res.send(posts);
  } catch (e) {
    next(e.message);
  }
}

exports.postController = {
  getAll
};
