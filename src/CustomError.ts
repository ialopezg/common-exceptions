/**
 * Custom error for handling not recognized errors.
 */
export class CustomError extends Error {
  detail: string;
  statusCode: number;
  errorType: string;

  constructor(statusCode?: number, message?: string, detail?: string, errorType?: string) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    // Error name
    this.name = "CustomError";

    // Error type
    this.errorType = errorType || 'Application';

    // Message error
    this.message = message || 'Bad Request. Default Custom Error';

    // Error status code
    this.statusCode = statusCode || 400;

    // Additional error detail
    this.detail = detail || 'The request could not be understood by the server due to malformed syntax.';
  }
}
