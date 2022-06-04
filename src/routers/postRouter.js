const { postController } = require('../controllers/postController');

const router = require('express').Router();

router.get('/', postController.getAll);

exports.postRouter = router;
