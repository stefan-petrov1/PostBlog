const { ApiError } = require("../config/errors/ApiError");

// Middleware to handle errors.
exports.apiErrorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.render('error', err)
  }

  // Call the function again to give nice input to the frontend dev while still alerting the error to the backend
  console.log(`\n\n------ INTERNAL SERVER ERROR ------\n`);
  console.error(err);
  console.log(`\n------ INTERNAL SERVER ERROR ------\n`);

  this.apiErrorMiddleware(ApiError.internal(), req, res, next);
};
