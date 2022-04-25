export interface ICustomError {
  statusCode?: number;
  message: string;
  errorType?: string;
  details?: { [key: string]: any };
}
