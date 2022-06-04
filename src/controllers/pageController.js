function renderIndex(req, res, next) {
  res.render('index');
}

exports.pageController = {
  renderIndex
};
