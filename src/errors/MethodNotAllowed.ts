import { CustomError } from '../CustomError';

/**
 * A request was made of a resource using a request method not supported by that resource
 */
export class MethodNotAllowed extends CustomError {
  name = 'MethodNotAllowed';

  constructor(
    message?: string,
    method?: string,
    namespace?: string,
    detatil?: string, errorType?: string
  ) {
    super(405, message || 'Method Not Allowed');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    if (namespace) {
      method = `${namespace}/${method}`;
    }

    this.detail =
      this.detail ||
      `The method ${method}} made a request to a resource not supported by that resource` ||
      'A request was made of a resource using a request method not supported by that resource';
  }
}
