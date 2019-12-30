const { Node, Queue } = require('./Queue.js');

const utils = {
  createList: function createList(length) {
    let list = null;
    for (let i = 1; i <= length; i++) {
      if (!list) {
        list = new Node(i);
      } else {
        list.addValue(i);
      }
    }
    return list;
  }
};

describe('Queue', () => {
  describe('Node', () => {
    describe('instantiates', () => {
      test('instantiates a new version of the Node class', () => {
        const node = new Node('test');
        expect(node instanceof Node).toBeTruthy();
        expect(node._value).toBe('test');
      });

      test('instantiates with this._value as defaulted to null if no value is provided', () => {
        const node = new Node();
        expect(node.getValue()).toBeNull();
      });

      test('instantiates with this._next and this._previous defaulted to null', () => {
        const node = new Node();
        expect(node._previous).toBeNull();
        expect(node._next).toBeNull();
      });
    });

    describe('getValue()', () => {
      test('returns the value of the current node', () => {
        const node = new Node('test');
        const result = node.getValue();
        expect(result).toBe('test');
      });

      test('returns null if no value is given at instantiation', () => {
        const node = new Node();
        const result = node.getValue();
        expect(result).toBeNull();
      });
    });

    describe('addValue()', () => {
      test('adds a value to the end of the linked-list', () => {
        const node = new Node(1);
        node.addValue(2);
        const result = node._next.getValue();
        expect(result).toBe(2);
      });

      test('adds a value to the end of a longer linked-list', () => {
        const list = utils.createList(10);
        const result = list._next._next._next._next._next._next._next._next._next.getValue();
        expect(result).toBe(10);
      });
    });

    describe('delete()', () => {
      test("returns the deleted Node's value", () => {
        const node = new Node(1);
        const result = node.delete();
        expect(result).toBe(1);
      });

      test('directs the previous and next nodes to each other when deleted', () => {
        const list = utils.createList(100);
        const deletedValue = list._next._next.delete();
        const result = list._next._next.getValue();
        expect(deletedValue).toBe(3);
        expect(result).toBe(4);
      });
    });
  });

  describe('Queue', () => {
    // finish
  });
});