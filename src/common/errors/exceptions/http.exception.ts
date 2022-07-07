import { HttpStatus } from '../../enums';
import { RuntimeException } from './runtime.exception';

/**
 * Defines an HTTP HttpException with status code.
 */
export class HttpException extends RuntimeException {
    /**
     * Creates a new instance of this class.
     *
     * @param message Descriptive message.
     * @param status Status code.
     */
    constructor(
        readonly message: string,
        private readonly status: HttpStatus | number,
    ) {
        super(message);
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
