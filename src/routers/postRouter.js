const { postController } = require('../controllers/postController');

const router = require('express').Router();

router.get('/create', postController.renderCreate);

exports.postRouter = router;
