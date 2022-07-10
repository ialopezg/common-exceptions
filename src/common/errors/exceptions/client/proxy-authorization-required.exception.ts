import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ProxyAuthenticationRequiredException extends CustomError {
  /**
   * Creates a ProxyAuthenticationRequired error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.PROXY_AUTHENTICATION_REQUIRED, message, options);
  }
}
