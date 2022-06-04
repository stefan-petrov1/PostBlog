const { postRouter } = require("../routers/postRouter");
const { ApiError } = require("./errors/ApiError");
const { apiErrorMiddleware } = require("../middlewares/apiErrorMiddleware");

module.exports = (app) => {
  app.use('/api', postRouter);

  // Setup error handling
  app.use('*', (req, res, next) => {
    const message = `Not Found ${req.method} on ${req.originalUrl}`;
    next(ApiError.notFound(message));
  });

  app.use(apiErrorMiddleware);
};
