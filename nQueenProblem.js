// N-Queens problem

// the n queens puzzle is the problem of placing n queens on nXn board
// such that no queen attack each other
// given an integer n, return all distinct solution to n queen puzzle
// you may return answer in any order
// each solution contain palcement where Q represents queen and - represent empty position

const n = 4;

// optimised solution to check safe placements
const rowCheck = {};
const upperLeftDiagonalCheck = {};
const bottomLeftDiagonalCheck = {};

const printSolution = (board, n) => {
  for (let i = 0; i < n; i++) {
    // for (let j = 0; j < n; j++) {
    //   console.log(board[i] + " ");
    // }
    console.log(board[i].join(" "));
  }
  console.log("\n");
};

const isSafe = (row, col, board, n) => {
  // optimised checking safe position to check in O(1) TC

  if (rowCheck[row] == true) return false;
  if (upperLeftDiagonalCheck[n - 1 + col - row] == true) return false;
  if (bottomLeftDiagonalCheck[row + col] == true) return false;

  // check if queen can be placed on (row,col) position

  //   let i = row;
  //   let j = col;

  //   // check row placement
  //   while (j >= 0) {
  //     if (board[i][j] == "Q") {
  //       return false;
  //     }
  //     j--;
  //   }

  //   // check upper left diagonal placement

  //   i = row;
  //   j = col;
  //   while (i >= 0 && j >= 0) {
  //     if (board[i][j] == "Q") {
  //       return false;
  //     }
  //     i--;
  //     j--;
  //   }

  //   // check bottom left diagonal placement
  //   i = row;
  //   j = col;
  //   while (i < n && j >= 0) {
  //     if (board[i][j] == "Q") {
  //       return false;
  //     }

  //     i++;
  //     j--;
  //   }

  //   if all clear then position is safe
  return true;
};

const solve = (board, col, n) => {
  // base case
  if (col >= n) {
    printSolution(board, n);
    return;
  }

  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row][col] = "Q";

      //   for optimised safe position checking
      rowCheck[row] = true;
      upperLeftDiagonalCheck[n - 1 + col - row] = true;
      bottomLeftDiagonalCheck[row + col] = true;

      // recursion
      solve(board, col + 1, n);
      // back tracking
      board[row][col] = "-";

      rowCheck[row] = false;
      upperLeftDiagonalCheck[n - 1 + col - row] = false;
      bottomLeftDiagonalCheck[row + col] = false;
    }
  }
};

const nQueenProblem = (n) => {
  const board = [];

  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill("-");
  }

  let col = 0;
  solve(board, col, n);
  return;
};

console.log(nQueenProblem(n));
