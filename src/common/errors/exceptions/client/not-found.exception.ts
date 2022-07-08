import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotFoundException extends CustomError {
  /**
   * Creates a NotFound error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.NOT_FOUND, message || 'Not found', options);

    // Additional error details
    this.details = options?.details || {
      message:
        'The server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.',
    };
  }
}
