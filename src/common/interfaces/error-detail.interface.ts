/**
 * Additional error detail.
 */
export interface ErrorDetailInterface {
  /**
   * Value reference.
   */
  value?: number | string;
  /**
   * Descriptive message.
   */
  message: string;
  /**
   * Parameter name.
   */
  param?: string;
  /**
   * Error path.
   */
  path?: string;
}
