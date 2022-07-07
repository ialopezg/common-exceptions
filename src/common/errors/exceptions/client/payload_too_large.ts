import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server refuses to process the request because the request payload is larger than the server is able or willing to process. While the server may close the connection to prevent the client from continuing the request, it should generate a Retry-After header field and after how long can the client retry.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PayloadTooLarge extends CustomError {
  /**
   * Creates a PayloadTooLarge error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 413, message: message ?? 'Payload Too Large' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server refuses to process the request because the request payload is larger than the server is able or willing to process.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
