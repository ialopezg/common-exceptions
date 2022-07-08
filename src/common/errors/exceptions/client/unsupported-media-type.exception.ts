import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server is rejecting the request because it does not support the media format of the requested data.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnsupportedMediaTypeException extends CustomError {
  /**
   * Creates a UnsupportedMediaType error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      message || 'Unsupported Media Type',
      options,
    );

    // Additional error detail
    this.details = options || {
      message:
        'The server is rejecting the request because it does not support the media format of the requested data.',
    };
  }
}
