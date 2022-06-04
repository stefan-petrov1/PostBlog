function renderIndex(req, res) {
  res.render('index');
}

function renderLogin(req, res) {
  res.render('login');
}

function renderRegister(req, res) {
  res.render('register');
}

exports.pageController = {
  renderIndex,
  renderLogin,
  renderRegister
};
