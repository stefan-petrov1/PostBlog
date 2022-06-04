const { pageController } = require('../controllers/pageController');

const router = require('express').Router();

router.get('/', pageController.renderIndex);

exports.pageRouter = router;
