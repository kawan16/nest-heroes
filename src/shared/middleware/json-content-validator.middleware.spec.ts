import { JsonContentValidatorMiddleware } from './json-content-validator.middleware';

describe('JsonContentValidatorMiddleware', () => {
  it('should be defined', () => {
    expect(new JsonContentValidatorMiddleware()).toBeDefined();
  });
});
