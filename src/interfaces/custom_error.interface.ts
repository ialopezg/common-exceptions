export interface ICustomError {
  statusCode?: number;
  message: string;
  details?: string;
  errorType?: string;
}
