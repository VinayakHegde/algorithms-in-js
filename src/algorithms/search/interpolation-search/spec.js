import search from '.';

describe('Interpolation Search', () => {
  it('should search elements in sorted array of numbers', () => {
    expect(search({ list: [], value: 1 })).toBe(-1);
    expect(search({ list: [1], value: 1 })).toBe(0);
    expect(search({ list: [1], value: 0 })).toBe(-1);
    expect(search({ list: [1, 1], value: 1 })).toBe(0);
    expect(search({ list: [1, 2], value: 1 })).toBe(0);
    expect(search({ list: [1, 2], value: 2 })).toBe(1);
    expect(search({ list: [10, 20, 30, 40, 50], value: 40 })).toBe(3);
    expect(search({ list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value: 14 })).toBe(13);
    expect(search({ list: [1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], value: 24 })).toBe(10);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 600 })).toBe(-1);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 1 })).toBe(0);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 2 })).toBe(1);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 3 })).toBe(2);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 700 })).toBe(3);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 800 })).toBe(4);
    expect(search({ list: [0, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 1200 })).toBe(5);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 19000], value: 800 })).toBe(4);
    expect(search({ list: [0, 10, 11, 12, 13, 14, 15], value: 10 })).toBe(1);
  });
});
