import { CustomError } from '../custom_error';

/**
 * Represents a error when the client must first be authenticated by a proxy (similar to a 401).
 *  @class
 *
 * This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ProxyAuthenticationRequired extends CustomError {
  /**
   * Creates a ProxyAuthenticationRequired error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({
      statusCode: 407,
      message: message ?? 'Proxy Authentication Required',
    });

    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The client must first be authenticated by a proxy.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
