import { CustomError } from '../custom_error';

/**
 * Represents a error when the server does not support the functionality required to fulfill the request.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotImplemented extends CustomError {
  /**
   * Creates a NotImplemented error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 501,
      message: message ?? 'Not Implemented',
    });

    // Error name
    this.name = NotImplemented.name;
    // Error type
    this.errorType = 'Server';
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request can not be handled because it is not supported by the server.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
