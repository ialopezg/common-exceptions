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
   * @param details Optional. Additional message details.
   */
  constructor(details?: string) {
    super({ statusCode: 503, message: 'Service Unavailable' });

    // Error name
    this.name = 'ServiceUnavailable';
    // Error type
    this.errorType = `Server.${ServiceUnavailable.name}`;
    // Additional error detail
    this.details =
      details ??
      'The server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.';
  }
}
