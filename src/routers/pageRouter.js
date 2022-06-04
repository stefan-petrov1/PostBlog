const { pageController } = require('../controllers/pageController');

const router = require('express').Router();

router.get('/', pageController.renderIndex);
router.get('/login', pageController.renderLogin);
router.get('/register', pageController.renderRegister);

exports.pageRouter = router;
