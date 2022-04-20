import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server knows the request method, the method has been disabled and can not be used.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class MethodNotAllowed extends CustomError {
  /**
   * Creates a MethodNotAllowed error.
   * @constructor
   *
   * @param method Optional. Method name.
   * @param namespace Optional. Metnod namespace.
   */
  constructor(method?: string, namespace?: string) {
    super({
      statusCode: 405,
      message: 'Method Not Allowed',
    });

    // Error name
    this.name = MethodNotAllowed.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    if (namespace) {
      method = `${namespace}/${method}`;
    }
    // Additional error detail
    this.details =
      `The server knows the requested method '${method}}', the method has been disabled and cannot be used` ||
      'The server knows the request method, the method has been disabled and can not be used.';
  }
}
