/**
 * Custom error for handling not recognized errors.
 */
export class CustomError extends Error {
  detail: string;
  statusCode: number;

  constructor(statusCode?: number, message?: string, detail?: string) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    this.name = CustomError.constructor.name;

    this.message = message || 'Bad Request. Default Custom Error';

    // Custom debugging information
    this.statusCode = statusCode || 400;
    this.detail = detail || 'The request could not be understood by the server due to malformed syntax.';
  }
}
