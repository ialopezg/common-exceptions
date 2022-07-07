import { CustomError } from '../../custom_error';

/**
 * Represents a error the server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnavailableForLegalReasons extends CustomError {
  /**
   * Creates a UnavailableForLegalReasons error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({
      status: 451,
      message: message ?? 'Unavailable For Legal Reasons',
    });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.',
          param: null,
          location: null,
        },
      ],
    };
  }
}