import binarySearch from '.';

describe('Binary Search', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch()).toBe(-1);
    expect(binarySearch({ list: [], value: 1 })).toBe(-1);
    expect(binarySearch({ list: [1], value: 1 })).toBe(0);
    expect(binarySearch({ list: [1, 2], value: 1 })).toBe(0);
    expect(binarySearch({ list: [1, 2], value: 2 })).toBe(1);
    expect(binarySearch({ list: [1, 5, 10, 12], value: 1 })).toBe(0);
    expect(binarySearch({ list: [1, 5, 10, 12, 14, 17, 22, 100], value: 17 })).toBe(5);
    expect(binarySearch({ list: [1, 5, 10, 12, 14, 17, 22, 100], value: 1 })).toBe(0);
    expect(binarySearch({ list: [1, 5, 10, 12, 14, 17, 22, 100], value: 100 })).toBe(7);
    expect(binarySearch({ list: [1, 5, 10, 12, 14, 17, 22, 100], value: 0 })).toBe(-1);
  });

  it('should search object in sorted array', () => {
    const list = [
      { number: 1, string: 'string 1', object: { number: 1 } },
      { number: 2, string: 'string 2', object: { number: 2 } },
      { number: 3, string: 'string 3', object: { number: 3 } },
    ];

    expect(binarySearch({ list: [], value: { number: 1 } })).toBe(-1);
    expect(binarySearch({ list, value: { number: 4 } })).toBe(-1);
    expect(binarySearch({ list: [list[0]], value: { number: 1 } })).toBe(0);
    expect(binarySearch({ list, value: { number: 2 } })).toBe(1);
    expect(binarySearch({ list, value: { number: 3 } })).toBe(2);
  });
});
