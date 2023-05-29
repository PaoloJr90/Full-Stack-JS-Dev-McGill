// Creating boards
// use functions that creates a board and populates it with game pieces

const generateBoard = (length, width, pieces) => {
  // create an empty two-dimensional array and fill it with empty strings
  const board = Array.from({ length }, () => Array(width).fill(" "));

  // iterate over the pieces array of objects
  for (const piece of pieces) {
    // destructure the object into its properties (row, col, value)
    // use the properties to assign the value to the corresponding index in the board
    const { row, col, value } = piece;

    // check if the row and col values are within bounds
    if (row >= 0 && row < length && col >= 0 && col < width) {
      // assign the value to the corresponding index using array destructuring
      board[row][col] = value;
    }
  }
  return board;
};

// sample test
const length = 3;
const width = 3;
const pieces = [
  { row: 0, col: 0, value: "X" },
  { row: 0, col: 1, value: "X" },
  { row: 0, col: 2, value: "O" },
  { row: 1, col: 0, value: "O" },
  { row: 1, col: 2, value: "X" },
  { row: 2, col: 0, value: "X" },
  { row: 2, col: 1, value: "O" },
  { row: 2, col: 2, value: "O" },
];

const board = generateBoard(length, width, pieces);
console.log(board);
