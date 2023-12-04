import { ExceptionOptions } from '../../../interfaces';
import { NotFoundException } from './not-found.exception';
import { getHttpStatusDefaultMessage } from '../../../utils';
import { HttpStatus } from '../../../enums';

/**
 * Represents an error when the requested entity could not be localized.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {NotFoundException}
 * @license MIT
 */
export class RecordNotFoundException extends NotFoundException {
  /**
   * Creates a RecordNotFound error.
   * @constructor
   *
   * @param id Record not found.
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(
    id: number | string,
    message?: string,
    options?: ExceptionOptions,
  ) {
    super(message, options);

    this.details = options?.details ?? {
      message: getHttpStatusDefaultMessage(HttpStatus.NOT_FOUND).replace(
        '%s',
        id.toString(),
      ),
    };
  }
}
