import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error the server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnavailableForLegalReasonsException extends CustomError {
  /**
   * Creates a UnavailableForLegalReasons error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS, message, options);
  }
}
