export default Search => {
  const bs = new Search([1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24]);
  it('should search values in default search', () => {
    expect(bs.find(0)).toBe(-1);
    bs.update([0, 1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24]);
    expect(bs.find(0)).toBe(0);
  });
};
