import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ServiceUnavailableException extends CustomError {
  /**
   * Creates a ServiceUnavailable error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.SERVICE_UNAVAILABLE, message, options);
  }
}
