/**
 * Centralized Error Handling Middleware for Aura Clinic API
 */
export const errorHandler = (err, req, res, next) => {
  console.error('[API Server Error]:', err);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || 'Internal Server Error';
  let errors = null;

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Failed';
    errors = Object.values(err.errors).map((val) => val.message);
  }

  // Handle Mongoose Duplicate Key Error (e.g. 11000)
  if (err.code === 11000) {
    statusCode = 409;
    message = 'Duplicate field value entered. A record with this information already exists.';
  }

  // Handle Invalid ObjectId
  if (err.name === 'CastError') {
    statusCode = 404;
    message = `Resource not found with id: ${err.value}`;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
