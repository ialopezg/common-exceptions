import { CustomErrorType } from '../enums';

export interface ICustomError {
  statusCode?: number;
  message: string;
  isPublic?: boolean;
  isOperational?: boolean;
  errorType?: CustomErrorType;
  details?: { [key: string]: any } | string;
  stack?: string;
}
