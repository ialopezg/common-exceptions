import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the client request was directed at a server that is not configured to produce a response.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class MisdirectedRequestException extends CustomError {
  /**
   * Creates a MisdirectedRequest error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.MISDIRECTED_REQUEST,
      message || 'Misdirected Request',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message:
        'The client request was directed at a server that is not configured to produce a response.',
    };
  }
}
