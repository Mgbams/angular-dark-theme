import { Dummy } from './dummy';

describe('Dummy', () => {
  it('should create an instance', () => {
    expect(new Dummy()).toBeTruthy();
  });

  it('should be truthy', () => expect(100).toBe(100));
});
