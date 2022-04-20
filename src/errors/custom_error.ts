import { ICustomError } from '../interfaces';

/**
 * Custom error for handling not recognized errors.
 */
export class CustomError extends Error {
  details: string;
  statusCode: number;
  errorType: string;

  constructor(error: ICustomError) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    // Error status code
    this.statusCode = error.statusCode || 400;
    // Error name
    this.name = CustomError.name;
    // Message error
    this.message = error.message || 'Custom Error (Bad Request)';
    // Error type
    this.errorType = error.errorType ?? `App.${this.name}`;
    // Additional error detail
    this.details =
      error.details ||
      'The request could not be understood by the server due to malformed syntax.';
  }

  public toString = (): string => {
    return `${this.statusCode} ${this.message}`;
  };
}
