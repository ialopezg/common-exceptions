import { HttpException, RuntimeException } from '../../../errors';
import { expect } from 'chai';
import { HttpStatus } from '../../../enums';
import { getHttpStatusDefaultTitle } from '../../../utils';
import * as sinon from 'sinon';

describe('HttpException', () => {
  const status = HttpStatus.INTERNAL_SERVER_ERROR;
  let message: string;
  let error: HttpException;
  let getStatusSpy: sinon.SinonSpy;

  beforeEach(() => {
    message = getHttpStatusDefaultTitle(status);
    error = new HttpException(status, message);
    getStatusSpy = sinon.spy(error, 'getStatus');
  });

  it('should be an instance of RuntimeException', () => {
    expect(error).to.be.instanceOf(RuntimeException);
    expect(error).to.be.instanceOf(HttpException);
  });

  it('should has status and message properties', () => {
    expect(error).to.have.property('name');
    expect(error).to.have.property('status');
    expect(error).to.have.property('message');
    expect(error).to.have.property('stack');
  });

  describe('.getStatus()', () => {
    it('should called once', () => {
      error.getStatus();

      expect(getStatusSpy.calledOnce).to.be.true;
    });

    it('should return a number value', () => {
      const status = error.getStatus();

      expect(getStatusSpy.calledOnce).to.be.true;
      expect(error.getStatus()).to.be.a('number');
      expect(error.getStatus()).to.equal(status);
    });
  });
});
