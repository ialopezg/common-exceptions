import { CustomError } from '../custom_error';

/**
 * Represents a error when the server is rejecting the request because it does not support the media format of the requested data.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnsupportedMediaType extends CustomError {
  /**
   * Creates a UnsupportedMediaType error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 415, message: message ?? 'Unsupported Media Type' });

    // Error name
    this.name = UnsupportedMediaType.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server is rejecting the request because it does not support the media format of the requested data.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
