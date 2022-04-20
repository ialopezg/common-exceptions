import { CustomError } from '../custom_error';

/**
 * Represents a error when the client must first be authenticated by a proxy (similar to a 401).
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
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 407,
      message: message ?? 'Proxy Authentication Required',
    });

    // Error name
    this.name = ProxyAuthenticationRequired.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ?? 'The client must first be authenticated by a proxy.';
  }
}
