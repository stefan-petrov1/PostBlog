const { ApiError } = require("../config/errors/ApiError");

exports.apiErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).send(err);
  }

  console.error(`\n\n------ INTERNAL SERVER ERROR ------\n${err}\n\n`);
  this.apiErrorMiddleware(ApiError.internal(), req, res, next);
};
