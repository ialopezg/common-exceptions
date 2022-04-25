import { ICustomError } from '../interfaces';

/**
 * Base class to representa a custom error than handling not recognized errors.
 * * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export abstract class CustomError extends Error {
  details: { [key: string]: any };
  statusCode: number;
  errorType: string;

  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param {ICustomError} error Optional. Error details.
   */
  constructor(error: ICustomError) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    // Error status code
    this.statusCode = error.statusCode ?? 400;
    // Error name
    this.name = CustomError.name;
    // Message error
    this.message = error.message ?? 'Custom Error (Bad Request)';
    // Error type
    this.errorType = error.errorType ?? 'Client';
    // Additional error detail
    this.details = error.details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request could not be understood by the server due to malformed syntax.',
          param: null,
          location: null,
        },
      ],
    };
  }

  public toString = (): string => {
    return `${this.statusCode} ${this.message}`;
  };
}
