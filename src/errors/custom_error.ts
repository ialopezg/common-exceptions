import { CustomErrorType } from '../enums';
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
  details?: { [key: string]: any } | string;
  statusCode: number;
  errorType: CustomErrorType;
  isPublic?: boolean;
  isOperational: boolean = true;

  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param {ICustomError} error Optional. Error details.
   */
  constructor(error: ICustomError) {
    // Pass message argument to parent constructor
    super(error.message);

    // Error status code
    this.statusCode = error.statusCode ?? 400;
    // Error name
    this.name = this.constructor.name;
    // Message error
    this.message = error.message ?? 'Custom Error (Bad Request)';
    // Whether if error will be displayed in production mode
    this.isPublic = error.isPublic ?? true;
    // Error type
    this.errorType = error.errorType ?? CustomErrorType.Client;
    // Whether error will stop the application
    this.isOperational =
      error.isOperational || this.errorType === CustomErrorType.Client;
    // Additional error detail
    this.details = error.details;
    // Error stack
    this.stack = error.stack;
  }

  public toString = (): string => {
    return `${this.statusCode} ${this.message}`;
  };
}
