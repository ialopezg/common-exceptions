import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server has the following internal configuration error: The chosen variant
 * resource is configured to engage in transparent negotiation itself, therefore it cannot be a proper
 * endpoint in the negotiation process.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class VariantAlsoNegotiatesException extends CustomError {
  /**
   * Creates a VariantAlsoNegotiates error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.VARIANT_ALSO_NEGOTIATES,
      message || 'Variant Also Negotiates',
      options,
    );

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message: 'The server has the following internal configuration error.',
    };
  }
}
