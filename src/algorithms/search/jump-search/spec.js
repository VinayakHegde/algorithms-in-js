import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Jump Search', () => {
  const testSuite = new TestSuite(search);
  testSuite.common();
  testSuite.object();

  it('should return the index for non-sorted array of numbers', () => {
    expect(search({ list: [10, 0, 11, 15, 13, 12, 14], value: 0 })).toBe(1);
  });
  it('should return first found index in array of duplicate numbers', () => {
    expect(search({ list: [1, 1], value: 1 })).toBe(0);
    expect(search({ list: [1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], value: 24 })).toBe(10);
  });
  // it('should search for an element in sorted array', () => {
  //   expect(search({ list: [], value: 1 })).toBe(-1);
  //   expect(search({ list: [1], value: 2 })).toBe(-1);
  //   expect(search({ list: [1], value: 1 })).toBe(0);
  //   expect(search({ list: [1, 2], value: 1 })).toBe(0);
  //   expect(search({ list: [1, 2], value: 1 })).toBe(0);
  //   expect(search({ list: [1, 1, 1], value: 1 })).toBe(0);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 2 })).toBe(1);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 0 })).toBe(-1);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 0 })).toBe(-1);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 7 })).toBe(-1);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 5 })).toBe(2);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 20 })).toBe(4);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 30 })).toBe(7);
  //   expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 48 })).toBe(8);
  // });

  // it('should search object in sorted array', () => {
  //   const list = [
  //     { key: 1, value: 'value1' },
  //     { key: 2, value: 'value2' },
  //     { key: 3, value: 'value3' },
  //   ];

  //   expect(search({ list: [], value: { key: 1 } })).toBe(-1);
  //   expect(search({ list, value: { key: 4 } })).toBe(-1);
  //   expect(search({ list, value: { key: 1 } })).toBe(0);
  //   expect(search({ list, value: { key: 2 } })).toBe(1);
  //   expect(search({ list, value: { key: 3 } })).toBe(2);
  // });
});
