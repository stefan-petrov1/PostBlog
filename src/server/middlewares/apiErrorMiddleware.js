const { ApiError } = require("../config/errors/ApiError");

// Middleware to handle errors.
exports.apiErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.code).send(err);
  }

  // Call the function again to give nice input to the frontend dev while still alerting the error to the backend
  console.error(`\n\n------ INTERNAL SERVER ERROR ------\n${err}\n\n`);
  this.apiErrorMiddleware(ApiError.internal(), req, res, next);
};
