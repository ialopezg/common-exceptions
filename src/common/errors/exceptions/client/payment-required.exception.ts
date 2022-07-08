import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the request cannot be processed until the client makes a payment.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PaymentRequiredException extends CustomError {
  /**
   * Creates a PaymentRequired error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.PAYMENT_REQUIRED, message || 'Payment Required', options);

    // Additional error details
    this.details = options?.details || {
      message:
        'The request cannot be processed until the client makes a payment.',
    };
  }
}
