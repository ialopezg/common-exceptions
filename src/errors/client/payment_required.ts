import { CustomError } from '../custom_error';

/**
 * Represents a error when the request cannot be processed until the client makes a payment.
 * @class
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
   * @param {string} message Optional. Message to be displayed.
    @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 402, message: message ?? 'Payment Required' });

    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request cannot be processed until the client makes a payment.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
