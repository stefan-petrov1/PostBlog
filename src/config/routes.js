const { postRouter } = require("../routers/postRouter");
const { ApiError } = require("./errors/ApiError");
const { apiErrorMiddleware } = require("../middlewares/apiErrorMiddleware");
const { pageRouter } = require("../routers/pageRouter");

module.exports = (app) => {
  app.use('/', pageRouter);
  app.use('/api', postRouter);

  // Setup error handling
  app.get('*', (req, res, next) => {
    const message = `Not Found ${req.method} on ${req.originalUrl}`;
    next(ApiError.notFound(message));
  });

  app.use(apiErrorMiddleware);
};
