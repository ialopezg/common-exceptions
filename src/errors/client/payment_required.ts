import { CustomError } from '../custom_error';

/**
 * Represents a error when the request cannot be processed until the client makes a payment.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PaymentRequired extends CustomError {
  /**
   * Creates a PaymentRequired error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 402,
      message: message ?? 'Payment Required',
    });

    // Error name
    this.name = PaymentRequired.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      'The request cannot be processed until the client makes a payment.';
  }
}
