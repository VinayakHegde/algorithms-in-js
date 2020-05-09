export const UnsortedListNotFound = search => {
  it('should return -1 for non-sorted array of numbers', () => {
    expect(search({ list: [10, 0, 11, 15, 13, 12, 14], value: 0 })).toBe(-1);
  });
};

export const UnsortedListFound = search => {
  it('should return the index for non-sorted array of numbers', () => {
    expect(search({ list: [10, 0, 11, 15, 13, 12, 14], value: 0 })).toBe(1);
  });
};

export const FirstFoundValueIndex = search => {
  it('should return first found index in array of duplicate numbers', () => {
    expect(search({ list: [1, 1], value: 1 })).toBe(0);
    expect(search({ list: [1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], value: 24 })).toBe(10);
  });
};

export const LastFoundValueIndex = search => {
  it('should return first found index in array of duplicate numbers', () => {
    expect(search({ list: [1, 1], value: 1 })).toBe(1);
    expect(search({ list: [1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], value: 24 })).toBe(12);
  });
};

export default {};
