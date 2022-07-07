import { ErrorType, HttpStatus } from '../enums';
import { ErrorInterface } from '../interfaces';
import { HttpException } from './exceptions';

/**
 * Base class to representa a custom error than handling not recognized errors.
 * * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export abstract class CustomError extends HttpException {
  details?: { [key: string]: any } | string;
  errorType: ErrorType;
  isPublic?: boolean;
  isOperational: boolean = true;

  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param {ErrorInterface} error Optional. Error details.
   */
  constructor(error: ErrorInterface) {
    super(error.message = 'Custom Error (Bad Request)', error.status || HttpStatus.BAD_REQUEST);

    // Error name
    this.name = this.constructor.name;

    // Whether if error will be displayed in production mode
    this.isPublic = error.isPublic || true;
    // Exception or error type
    this.errorType = error.errorType || ErrorType.Client;
    // Whether error will stop the application
    this.isOperational =
      error.isOperational || this.errorType === ErrorType.Client;
    // Additional error detail
    this.details = error.details;
    // Error stack
    this.stack = error?.stack || '';
  }

  /**
   * The toString() method returns a string representing the object.
   * 
   * @returns A string.
   */
  public toString = (): string => {
    return `${this.getStatus()} ${this.getMessage()}`;
  };
}
