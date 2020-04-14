/**
 * Custom error for handling not recognized errors.
 */
export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode?: number, message?: string) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    this.name = CustomError.constructor.name;

    this.message = message || 'Bad Request. Default Custom Error';

    // Custom debugging information
    this.statusCode = statusCode || 400;
  }
}
