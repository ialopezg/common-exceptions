import { CustomError } from '../custom_error';

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
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 451,
      message: message ?? 'UUnavailable For Legal Reasons',
    });

    // Error name
    this.name = UnavailableForLegalReasons.name;
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
