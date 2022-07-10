import { expect } from 'chai';

import { ErrorType, HttpStatus } from '../../enums';
import { CustomError, HttpException, RuntimeException } from '../../errors';
import {
  getHttpStatusDefaultTitle,
  getHttpStatusDefaultMessage,
} from '../../utils';

describe('CustomError', () => {
  describe('Inheritance', () => {
    const error = new CustomError();

    it('should be an instance of itself and all parent inherited classes', () => {
      expect(error).to.be.instanceOf(RuntimeException);
      expect(error).to.be.instanceOf(HttpException);
    });
  });

  describe('constructor', () => {
    describe('without arguments', () => {
      const error = new CustomError();

      it('should inherit properties from it parent classes', () => {
        expect(error).to.have.property('status');
        expect(error).to.have.property('message');
      });
    });

    describe('with arguments', () => {
      it('should return custom values', () => {
        const status = HttpStatus.UNAUTHORIZED;
        const message = 'Unauthorized User';
        const options = {
          details: { message: getHttpStatusDefaultMessage(status) },
        };
        const error = new CustomError(status, message, options);

        expect(error.getStatus()).to.equal(status);
        expect(error.getMessage()).to.equal(message);
        expect(error.details).to.equal(options.details);
      });
    });
  });

  describe('.isPublic', () => {
    it('should be true by default', () => {
      const error = new CustomError();

      expect(error.isPublic).to.be.true;
    });

    it('should be false when user defined', () => {
      const status = HttpStatus.BAD_REQUEST;
      const error = new CustomError(status, getHttpStatusDefaultTitle(status), {
        isPublic: false,
      });

      expect(error.isPublic).to.be.false;
    });
  });

  describe('.isOperational', () => {
    it('should be true by default', () => {
      const error = new CustomError(
        HttpStatus.BAD_REQUEST,
        getHttpStatusDefaultTitle(HttpStatus.BAD_REQUEST),
      );

      expect(error.isOperational).to.be.true;
    });

    it('should be false when user defined', () => {
      const error = new CustomError(
        HttpStatus.BAD_REQUEST,
        getHttpStatusDefaultTitle(HttpStatus.BAD_REQUEST),
        { isOperational: false },
      );

      expect(error.isOperational).to.be.false;
    });

    it('should be true when HttpStatus is 4xx', () => {
      const status = HttpStatus.BAD_REQUEST;
      const error = new CustomError(status, getHttpStatusDefaultTitle(status));

      expect(error.isOperational).to.be.true;
    });

    it('should be false when HttpStatus is 5xx', () => {
      const error = new CustomError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        getHttpStatusDefaultTitle(HttpStatus.INTERNAL_SERVER_ERROR),
      );

      expect(error.isOperational).to.be.false;
    });
  });

  describe('.errorType', () => {
    it('should be a client type error by default', () => {
      const error = new CustomError();

      expect(error.errorType).to.equal(ErrorType.Client);
    });

    it('should be a client type error', () => {
      const error = new CustomError(HttpStatus.BAD_REQUEST);

      expect(error.errorType).to.equal(ErrorType.Client);
    });

    it('should be a server type error', () => {
      const error = new CustomError(HttpStatus.BAD_GATEWAY);

      expect(error.errorType).to.equal(ErrorType.Server);
    });
  });

  describe('.details', () => {
    it('should be an object with default HttpStatus message value by default', () => {
      const error = new CustomError();
      const details = {
        message: getHttpStatusDefaultMessage(error.getStatus()),
      };

      expect(error.details).to.be.an('object');
      expect(Object.keys(error.details).length).to.be.eql(1);
      expect(error.details).to.be.eql(details);
    });

    it('should be an object with user data values defined', () => {
      const status = HttpStatus.BAD_REQUEST;
      const details = {
        message: 'Test error',
        path: 'test.error',
      };
      const error = new CustomError(status, getHttpStatusDefaultTitle(status), {
        details,
      });

      expect(error.details).to.be.an('object');
      expect(Object.keys(error.details).length).to.be.eql(2);
      expect(error.details).to.be.eql(details);
    });
  });

  describe('.stack', () => {
    it('should be an empty string by default', () => {
      const error = new CustomError();

      expect(error.stack).to.be.empty;
    });

    it('should be user value defined', () => {
      const status = HttpStatus.BAD_REQUEST;
      const stack = 'Test Error Stack Trace';
      const error = new CustomError(status, getHttpStatusDefaultTitle(status), {
        stack,
      });

      expect(error.stack).to.be.not.empty;
      expect(error.stack).to.be.eql(stack);
    });
  });

  describe('.toString()', () => {
    const error = new CustomError();

    it('should return a string value', () => {
      expect(error.toString()).to.be.eq(
        `${error.getStatus()} ${error.getMessage()}`,
      );
    });
  });
});
