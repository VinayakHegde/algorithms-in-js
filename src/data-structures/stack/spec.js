import Stack from '.';

const stack = new Stack();

describe('Empty Stack', () => {
  it('should create Stack data structure', () => {
    expect(stack instanceof Stack).toBeTruthy();
  });
  it('should be empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('should return null when pop is performed on empty stack', () => {
    expect(stack.pop()).toBeNull();
  });
  it('should return empty string when popOrderToString is performed on empty stack', () => {
    expect(stack.popOrderToString()).toBe('');
  });
  it('should return empty list when pushOrder is performed on empty stack', () => {
    expect(stack.pushOrder(true)).toEqual([]);
  });
});

describe('Stack operations', () => {
  it('should push the element into stack - push', () => {
    stack.push(1);
    expect(stack.length).toBe(1);
    expect(stack.popOrderToString()).toBe('1');
    expect(stack.isEmpty()).toBeFalsy();
  });
  it('should remove last element - pop', () => {
    stack.push(3);
    expect(stack.popOrder()).toEqual([3, 1]);
    expect(stack.popOrderToString()).toBe('3, 1');
    expect(stack.pop()).toBe(3);
    expect(stack.popOrder()).toEqual([1]);
    expect(stack.popOrderToString()).toBe('1');
  });
  it('should return last element in the stack - peek', () => {
    stack.push(3);
    expect(stack.popOrder()).toEqual([3, 1]);
    expect(stack.popOrderToString()).toBe('3, 1');
    expect(stack.peek()).toBe(3);
    expect(stack.popOrder()).toEqual([3, 1]);
    expect(stack.popOrderToString()).toBe('3, 1');
  });
  it('should return reverded list = pushOrder/popOrder', () => {
    stack.push(0);
    expect(stack.popOrder()).toEqual([0, 3, 1]);
    expect(stack.popOrderToString()).toBe('0, 3, 1');
    expect(stack.pushOrder()).toEqual([1, 3, 0]);
    expect(stack.pushOrderToString()).toBe('1, 3, 0');
  });
  it('should clear the stack - clear', () => {
    expect(stack.clear().isEmpty()).toBeTruthy();
  });
});
