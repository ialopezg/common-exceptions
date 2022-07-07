import { ErrorType } from '../../../enums';
import { ErrorDetailInterface } from '../../../interfaces';
import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server has the following internal configuration error: The chosen variant
 * resource is configured to engage in transparent negotiation itself, therefore it cannot be a proper
 * endpoint in the negotiation process.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class VariantAlsoNegotiates extends CustomError {
  /**
   * Creates a VariantAlsoNegotiates error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {ErrorDetailInterface|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: ErrorDetailInterface | { [key: string]: any } | string,
  ) {
    super({ status: 502, message: message ?? 'Variant Also Negotiates' });

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server has the following internal configuration error.',
        },
      ],
    };
  }
}
