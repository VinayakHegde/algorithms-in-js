import Queue from '.';

const queue = new Queue();

describe('Empty Queue', () => {
  it('should create queue data structure', () => {
    expect(queue instanceof Queue).toBeTruthy();
  });
  it('should be empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
  it('should return null when dequeue is performed on empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });
  it('should return empty string when dequeueOrderToString is performed on empty queue', () => {
    expect(queue.dequeueOrderToString()).toBe('');
  });
  it('should return empty list when enqueueOrder is performed on empty queue', () => {
    expect(queue.enqueueOrder()).toEqual([]);
  });
});

describe('queue operations', () => {
  it('should enqueue the element into queue - enqueue', () => {
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.dequeueOrderToString()).toBe('1');
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('should remove first element - dequeue', () => {
    queue.enqueue(3);
    expect(queue.dequeueOrder()).toEqual([1, 3]);
    expect(queue.dequeueOrderToString()).toBe('1, 3');
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeueOrder()).toEqual([3]);
    expect(queue.dequeueOrderToString()).toBe('3');
  });
  it('should return first element in the queue - peek', () => {
    queue.enqueue(2);
    expect(queue.dequeueOrder()).toEqual([3, 2]);
    expect(queue.dequeueOrderToString()).toBe('3, 2');
    expect(queue.peek()).toBe(3);
    expect(queue.dequeueOrder()).toEqual([3, 2]);
    expect(queue.dequeueOrderToString()).toBe('3, 2');
  });
  it('should return reverded list = enqueueOrder/dequeueOrder', () => {
    queue.enqueue(0);
    expect(queue.dequeueOrder()).toEqual([3, 2, 0]);
    expect(queue.dequeueOrderToString()).toBe('3, 2, 0');
    expect(queue.enqueueOrder()).toEqual([0, 2, 3]);
    expect(queue.enqueueOrderToString()).toBe('0, 2, 3');
  });
  it('should clear the queue - clear', () => {
    expect(queue.clear().isEmpty()).toBeTruthy();
  });
});
