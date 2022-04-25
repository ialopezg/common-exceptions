import { CustomError } from '../custom_error';

/**
 * Represents a error when the server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RequestHeaderFieldsTooLarge extends CustomError {
  /**
   * Creates a RequestHeaderFieldsTooLarge error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 431,
      message: message ?? 'Request Header Fields Too Large',
    });

    // Error name
    this.name = RequestHeaderFieldsTooLarge.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
