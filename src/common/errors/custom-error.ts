import { ErrorType, HttpStatus } from '../enums';
import { ExceptionOptions } from '../interfaces';
import { HttpException } from './exceptions/http.exception';

/**
 * Base class to representa a custom error than handling not recognized errors.
 * * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export abstract class CustomError extends HttpException {
  /**
   *  Error details.
   */
  public details: { [key: string]: any } | string;

  /**
   * Error type.
   */
  public errorType: ErrorType;

  /**
   * Whether this error could be displayed to the user.
   */
  public isPublic: boolean;

  /**
   * Whether this error could stop the application.
   */
  public isOperational: boolean;

  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param {ExceptionOptions} error Optional. Error details.
   */
  constructor(
    status: HttpStatus,
    message: string,
    details?: any,
    options?: ExceptionOptions,
  ) {
    super(
      (message = 'Custom Error (Bad Request)'),
      status || HttpStatus.BAD_REQUEST,
    );

    // Error name
    this.name = this.constructor.name;

    // Whether if error will be displayed in production mode
    this.isPublic = options?.isPublic || true;
    // Exception or error type
    this.errorType = options?.errorType || ErrorType.Client;
    // Whether error will stop the application
    this.isOperational =
      options?.isOperational || this.errorType === ErrorType.Client;
    // Additional error detail
    this.details = options?.details || '';
    // Error stack
    this.stack = options?.stack || '';
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
