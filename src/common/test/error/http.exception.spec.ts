import {
  CustomError,
  HttpException,
  InternalServerErrorException,
  RuntimeException,
} from '../../errors';
import { expect } from 'chai';
import { HttpStatus } from '../../enums';

describe('Errors', () => {
  it('should be an instance of InternalServerErrorException', () => {
    const error = new InternalServerErrorException();
    const message = error.getMessage();

    expect(error).to.be.instanceOf(RuntimeException);
    expect(error).to.be.instanceOf(HttpException);
    expect(error).to.be.instanceOf(CustomError);
    expect(error).to.be.instanceOf(InternalServerErrorException);
    expect(error).to.have.property('status');
    expect(error.getStatus()).to.equal(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(message).to.equal('Internal Server Error');
  });
});
