import { ErrorType, HttpStatus } from '../enums';

/**
 * Error object definition.
 */
export interface ExceptionOptions {
  /**
   * Whether error is public and displayed to the user.
   */
  isPublic?: boolean;

  /**
   * Whether error will not stop the application.
   */
  isOperational?: boolean;

  /**
   * Error type. Acceptable values: Server, Client.
   */
  errorType?: ErrorType;

  /**
  * Additional error details.
  */
  details?: { [key: string]: any } | string;

  /**
   * Error stack.
   */
  stack?: string;
}
