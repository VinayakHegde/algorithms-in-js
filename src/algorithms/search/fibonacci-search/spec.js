import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Fibonacci Search', () => {
  const testSuite = new TestSuite(search);
  testSuite.common();
  it('should return -1 for non-sorted array of numbers', () => {
    expect(search({ list: [10, 0, 11, 15, 13, 12, 14], value: 0 })).toBe(-1);
  });
  it('should return last found index in array of duplicate numbers', () => {
    expect(search({ list: [1, 1], value: 1 })).toBe(1);
    expect(search({ list: [1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], value: 24 })).toBe(12);
  });
});
