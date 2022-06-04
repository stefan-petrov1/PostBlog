const { postService } = require("../services/postService");

async function getAll(req, res, next) {
  try {
    const posts = await postService.getAll();
    res.status(200).json(posts);
  } catch (e) {
    next(e.message);
  }
}

exports.postController = {
  getAll
};
