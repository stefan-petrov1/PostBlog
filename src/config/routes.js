const { postRouter } = require("../routers/postRouter");
const { ApiError } = require("./errors/ApiError");
const { apiErrorMiddleware } = require("../middlewares/apiErrorMiddleware");
const { pageRouter } = require("../routers/pageRouter");

module.exports = (app) => {
  app.use('/', pageRouter);
  app.use('/api', postRouter);

  // Setup error handling
  app.get('*', (req, res, next) => {
    next(ApiError.notFound(`Couldn't find ${req.originalUrl}`));
  });

  app.use(apiErrorMiddleware);
};
