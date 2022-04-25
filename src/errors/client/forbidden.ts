import { CustomError } from '../custom_error';

/**
 * Represents a error when the client request has been rejected because the client does not have rights to access the content.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Forbidden extends CustomError {
  /**
   * Creates a Forbidden error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 403,
      message: message ?? 'Forbidden',
    });

    // Error name
    this.name = Forbidden.name;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The client request has been rejected because the client does not have rights to access the content.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
