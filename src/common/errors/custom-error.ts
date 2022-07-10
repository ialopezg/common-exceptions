import { ErrorType, HttpStatus } from '../enums';
import { ExceptionOptions } from '../interfaces';
import { HttpException } from './exceptions/http.exception';
import {
  getHttpStatusDefaultTitle,
  getHttpStatusDefaultMessage,
} from '../utils';

/**
 * Base class that represents a custom error than handling not recognized errors.
 * * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class CustomError extends HttpException {
  /**
   *  Error details.
   */
  public details: { [key: string]: any } | string;

  /**
   * Error type.
   */
  public readonly errorType: ErrorType;

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
   * @param status HTTP Status code.
   * @param message Error message.
   * @param options Additional error details.
   */
  constructor(
    status?: HttpStatus,
    message?: string,
    options?: ExceptionOptions,
  ) {
    status = status ?? HttpStatus.BAD_REQUEST;
    super(
      status,
      message ?? `Custom Error (${getHttpStatusDefaultTitle(status)})`,
    );

    // Error name
    this.name = this.constructor.name;

    // Whether if error will be displayed in production mode
    this.isPublic = options?.isPublic ?? true;
    // Exception or error type
    this.errorType =
      this.status >= 400 && this.status < 500
        ? ErrorType.Client
        : ErrorType.Server;
    // Whether error will stop the application
    this.isOperational =
      options?.isOperational ?? this.errorType === ErrorType.Client;
    // Additional error detail
    this.details = options?.details ?? {
      message: getHttpStatusDefaultMessage(this.status),
    };
    // Error stack
    this.stack = options?.stack ?? '';
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
