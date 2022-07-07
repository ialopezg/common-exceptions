import { ErrorType } from '../enums';

export interface ErrorInterface {
  status?: number;
  message: string;
  isPublic?: boolean;
  isOperational?: boolean;
  errorType?: ErrorType;
  details?: { [key: string]: any } | string;
  stack?: string;
}
