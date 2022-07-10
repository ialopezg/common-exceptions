/**
 * Defines the error base for all exceptions in this namespace.
 */
export declare class Error {
  /**
   * Error name.
   */
  public name: string;
  /**
   * Error message.
   */
  public message: string;
  /**
   * Error stack trace.
   */
  public stack: string;

  /**
   * Creates a new instances of Error class.
   * @param message Error message.
   */
  constructor(message?: string);
}

/**
 * Defines a base or runtime error.
 */
export class RuntimeException extends Error {
  /**
   * Creates a new instance.
   *
   * @param _message Error message.
   */
  constructor(private readonly _message = '') {
    super(_message);
  }

  /**
   * Gets the error message that represents this instance.
   *
   * @returns The representative error message.
   */
  getMessage(): string {
    return this._message;
  }
}
