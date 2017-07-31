var tictactoe = require('./index');
var board = require('./board');

test('should return an array', () => {
  expect(Array.isArray(board)).toBe(true);
});

test('should be a board with 3 rows and columns', () => {
  console.log('this be board', board);
  expect(board).toEqual( [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
});
