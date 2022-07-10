import { HttpStatus } from '../../enums';
import { RuntimeException } from './runtime.exception';

/**
 * Defines an HTTP HttpException with status code.
 */
export class HttpException extends RuntimeException {
  protected readonly status: HttpStatus | number;

  /**
   * Creates a new instance of this class.
   *
   * @param message Descriptive message.
   * @param status Status code.
   */
  constructor(status: HttpStatus | number, message: string) {
    super(message);

    this.status = status;
  }

  /**
   * Gets the status code for this exception.
   *
   * @returns The status code for this exception.
   */
  getStatus(): number | HttpStatus {
    return this.status;
  }
}
