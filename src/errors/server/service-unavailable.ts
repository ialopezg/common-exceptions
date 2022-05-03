import { CustomErrorType } from '../../enums';
import { CustomError } from '../custom_error';

/**
 * Represents a error when the server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ServiceUnavailable extends CustomError {
  /**
   * Creates a ServiceUnavailable error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 503, message: message ?? 'Service Unavailable' });

    // Error type
    this.errorType = CustomErrorType.Server;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server is currently not ready to handle the request.',
        },
      ],
    };
  }
}
