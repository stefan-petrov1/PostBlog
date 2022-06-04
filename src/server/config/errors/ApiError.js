class ApiError {
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }

  static badRequest(message) {
    return new ApiError(message, 400);
  }

  static notFound(message) {
    return new ApiError(message, 404);
  }

  static internal() {
    return new ApiError('Internal Server Error', 500);
  }
}

exports.ApiError = ApiError;
