# About the HTTP Status Codes

HTTP status codes are three-digit responses from the server to the browser-side request. Everyone has probably gotten
the classic 404 page-not-found error. That is an HTTP client error status code and there are a lot more of them.

These status codes (also called response status codes) serve as a means of communication between the server and the
internet browser and there are multiple code classes based on the type of information they are communicating. The
differences in classes are indicated through the first digit of the error code, for example: just like a 404, any other
4xx will mean that in some way the page or website could not be reached, while a 2xx means that your request was
successfully completed.

## How are HTTP status codes categorized?

HTTP status codes are split into 5 different categories. Each category will give you hints as to what the response was,
even if you don't know the specific response code.

The first digit of the status code defines the class of response, while the last two digits do not have any classifying
or categorization role. There are five classes defined by the standard:

- `1xx - Informational`: The server has received the request and is continuing the process.
- `2xx - Successful`: The request was successful and the browser has received the expected information
- `3xx (Redirection)`: You have been redirected and the completion of the request requires further action
- [4xx (Client Error)](client/index.md): The website or the page could not be reached, either the page is unavailable or
  the request contains bad syntax
- [5xx (Server Error)](server/index.md): While the request appears to be valid, the server could not complete the
  request

## HTTP Status Codes explained individually

In some cases a HTTP response code might be descriptive enough to understand its meaning. `200 OK` probably means that
everything went okay. But what about a `103 Early Hints`, `205 Reset Content` and `305 Use Proxy`?

This is an explanation for all [4xx](client/index.md) and [5xx](server/index.md) status codes.
