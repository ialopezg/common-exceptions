/**
 * Custom error for handling not recognized errors.
 */
export default class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message?: string) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    // Maintains proper stack trace for where our error is being throw (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError';

    this.message = message || 'Default Custom Error without message';

    // Custom debugging information
    this.statusCode = statusCode;
  }
}
