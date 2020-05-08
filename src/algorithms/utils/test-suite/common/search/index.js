export default search => {
  it('should search elements in sorted array of numbers', () => {
    expect(search({ list: [1], value: 1 })).toBe(0);
    expect(search({ list: [1, 2], value: 2 })).toBe(1);
    expect(search({ list: [10, 20, 30, 40, 50], value: 40 })).toBe(3);
    expect(search({ list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], value: 14 })).toBe(13);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 1 })).toBe(0);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 2 })).toBe(1);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 3 })).toBe(2);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 700 })).toBe(3);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 800 })).toBe(4);
    expect(search({ list: [0, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 1200 })).toBe(5);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 19000], value: 800 })).toBe(4);
    expect(search({ list: [0, 10, 11, 12, 13, 14, 15], value: 10 })).toBe(1);
  });
  it('should return -1 if item not found in sorted array of numbers', () => {
    expect(search({ list: [], value: 1 })).toBe(-1);
    expect(search({ list: [1], value: 0 })).toBe(-1);
    expect(search({ list: [1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], value: 600 })).toBe(-1);
  });
  it('should search array only if all the items are number type', () => {
    expect(search({ list: ['a', 1], value: 1 })).toBe(-1);
    expect(search({ list: [{ a: 'a' }, 1], value: 1 })).toBe(-1);
    expect(search({ list: [1, 2], value: 1 })).toBe(0);
  });
  it('should -1 if required params missing', () => {
    expect(search()).toBe(-1);
    expect(search({ list: [1, 2] })).toBe(-1);
  });
  it('should -1 if value is not of type number', () => {
    expect(search({ list: [1, 2], value: '1' })).toBe(-1);
    expect(search({ list: [1, 2], value: { a: '1' } })).toBe(-1);
  });
};
