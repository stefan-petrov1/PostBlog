function renderCreate(req, res, next) {
  res.render('createPost');
}

exports.postController = {
  renderCreate
};
