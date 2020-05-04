import search from '.';

describe('Jump Search', () => {
  it('should search for an element in sorted array', () => {
    expect(search({ list: [], value: 1 })).toBe(-1);
    expect(search({ list: [1], value: 2 })).toBe(-1);
    expect(search({ list: [1], value: 1 })).toBe(0);
    expect(search({ list: [1, 2], value: 1 })).toBe(0);
    expect(search({ list: [1, 2], value: 1 })).toBe(0);
    expect(search({ list: [1, 1, 1], value: 1 })).toBe(0);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 2 })).toBe(1);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 0 })).toBe(-1);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 0 })).toBe(-1);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 7 })).toBe(-1);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 5 })).toBe(2);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 20 })).toBe(4);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 30 })).toBe(7);
    expect(search({ list: [1, 2, 5, 10, 20, 21, 24, 30, 48], value: 48 })).toBe(8);
  });

  it('should search object in sorted array', () => {
    const list = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];

    expect(search({ list: [], value: { key: 1 } })).toBe(-1);
    expect(search({ list, value: { key: 4 } })).toBe(-1);
    expect(search({ list, value: { key: 1 } })).toBe(0);
    expect(search({ list, value: { key: 2 } })).toBe(1);
    expect(search({ list, value: { key: 3 } })).toBe(2);
  });
});
