# Changelog
All notable changes to this project will be documented in this file.

The format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2020-04-14

### Added

- BadGateway Error
- Forbidden Error
- NotImplemented Error
- Server Error
- ServiceUnavailable Error
- Unauthorized Error

### Changed

- Travis CI Support

## [0.0.3] - 2020-04-14

### Changed

- BadRequest: `this.errorType`, `this.detail`.
- RecordNotFound: `this.errorType`, `this.detail`.
- NotFound: `this.errorType`, `this.detail`.
- CustomError: `this.errorType`, `this.detail`.


## [0.0.2] 2020-04-13

### Added

- BadRequest Error
- RecordNotFound Error
- NotFound Error

### Changed

- Default CustomError. Added `this.errorType` and `this.detail` for additional debugging information.

## [0.0.1] - 2020-04-12 - Initial Version

### Added

- Default CustomError
- README.md file describing project
- CHANGELOG.md file
- Project initialization
