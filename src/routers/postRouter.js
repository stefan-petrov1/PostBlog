const { postController } = require('../controllers/postController');

const router = require('express').Router();

router.get('/create', postController.renderCreate);
router.post('/create', postController.create);

exports.postRouter = router;
