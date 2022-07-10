import { HttpStatus } from '../enums';
import { capitalizeEach } from './string.util';

const HTTP_STATUS_MESSAGES = {
  400: 'The server could not understand the request because of invalid syntax.',
  401: 'The request has not been applied because the server requires user authentication.',
  402: 'The request cannot be processed until the client makes a payment.',
  403: 'The client request has been rejected because the client does not have rights to access the content.',
  404: 'The server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.',
  4041: 'Entity ID %s not found!',
  405: 'The server knows the requested method, the method has been disabled and cannot be used',
  406: 'The server when it does not find any content following the criteria given by the user agent.',
  407: 'The client must first be authenticated by a proxy.',
  408: 'The server did not receive a complete request in the time that it prepared to wait.',
  409: 'The request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.',
  410: 'The target resource has been deleted and the condition seems to be permanent.',
  411: 'The server has rejected the request because it requires the Content-Length header field to be defined.',
  412: 'The server does not meet one or multiple preconditions that were indicated in the request header fields.',
  414: 'The server is refusing to service the request because the request-target was longer than the server was willing to interpret.',
  415: 'The server is rejecting the request because it does not support the media format of the requested data.',
  416: "The range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.",
  417: 'The Expectation indicated by the Expect request-header field could not be met by the server.',
  418: "The server refuses to brew coffee because it is, in fact, a teapot. (It is a reference to a 1998 April Fools' joke called ''Hyper Text Coffee Pot Control Protocol'').",
  421: 'The client request was directed at a server that is not configured to produce a response.',
  422: 'While the request was well-formed, the server was unable to follow it, due to semantic errors.',
  423: 'The resource that is being accessed is locked.',
  424: 'The method could not be performed on the resource because the requested action depended on another action and that action failed.',
  425: 'The server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.',
  426: 'The server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.',
  428: 'The origin server requires the request to be conditional.',
  429: 'The given time, the user has sent too many requests.',
  431: 'The server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.',
  451: 'The server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.',
  500: 'The server has encountered a situation that it does not know how to handle.',
  501: 'The request can not be handled because it is not supported by the server.',
  502: 'The server received an invalid response while working as a gateway to handle the response.',
  503: 'The server is currently not ready to handle the request.',
  504: 'The server received an invalid response while working as a gateway to handle the response.',
  505: 'The version of HTTP used in the request is not supported by the server.',
  506: 'The server has the following internal configuration error.',
  507: 'The method could not be performed on the resource because the server is not able to store the representation that would be needed to complete the request successfully.',
  508: 'The server has detected an infinite loop while processing the request.',
  510: 'Further extensions are required for the server to be able to fulfil the request.',
  511: 'The client needs to authenticate to gain network access.',
};

/**
 * Gets the default title for give HttpStatus code.
 *
 * @param status HttpStatus code
 * @returns A string value.
 */
export const getHttpStatusDefaultTitle = (
  status: HttpStatus | number,
): string => {
  return capitalizeEach(HttpStatus[status].replace('_', ' '));
};

/**
 * Gets default message details for given HttpStatus code.
 *
 * @param status HttpStatus code
 * @param messages A container with default messages values.
 * If provided will be used instead of default English values.
 *
 * @returns A string value.
 */
export const getHttpStatusDefaultMessage = (
  status: HttpStatus,
  messages: Record<number, string> = HTTP_STATUS_MESSAGES,
): string => {
  return !{}.hasOwnProperty.call(messages, status)
    ? messages[400]
    : messages[status];
};
