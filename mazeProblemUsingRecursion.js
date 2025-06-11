// maze problem using recursion and Back tracking
// consider a rat placed at (0,0) position in square matrix of n*n
// it has to reach destination (n-1, n-1)
// find all possible path rat can take to reach destination
// the direction in which rat can move are D-down, U-up, L-left, R-right.
// value 0 in cell represent that it is blocked and rat cannot move through it
// value 1 represent rat can move through it

// const maze = [
//   [1, 0, 0],
//   [1, 1, 0],
//   [1, 1, 1],
// ];
// const row = 3;
// const col = 3;
// // o/p - [ 'DDRR', 'DRDR' ]

const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
const row = 4;
const col = 4;
// op - [ 'DDRDRR', 'DRDDRR' ]

const isSafe = (i, j, row, col, maze, visited) => {
  if (
    i >= 0 &&
    i < row &&
    j >= 0 &&
    j < col &&
    maze[i][j] == 1 &&
    visited[i][j] == false
  ) {
    return true;
  } else {
    return false;
  }
};

const solveMaze = (maze, row, col, i, j, visited, path, output) => {
  // base case
  if (i == row - 1 && j == col - 1) {
    // answer found
    path.push(output);
    return;
  }

  //   // move down -> i+1, j
  //   if (isSafe(i + 1, j, row, col, maze, visited)) {
  //     visited[i + 1][j] = true;
  //     solveMaze(maze, row, col, i + 1, j, visited, path, output + "D");
  //     // back track
  //     visited[i + 1][j] = false;
  //   }

  //   // move left -> i, j-1
  //   if (isSafe(i, j - 1, row, col, maze, visited)) {
  //     visited[i][j - 1] = true;
  //     solveMaze(maze, row, col, i, j - 1, visited, path, output + "L");
  //     // back track
  //     visited[i][j - 1] = false;
  //   }

  //   // move right -> i, j+1
  //   if (isSafe(i, j + 1, row, col, maze, visited)) {
  //     visited[i][j + 1] = true;
  //     solveMaze(maze, row, col, i, j + 1, visited, path, output + "R");
  //     // back track
  //     visited[i][j + 1] = false;
  //   }

  //   // move up -> i-1, j
  //   if (isSafe(i - 1, j, row, col, maze, visited)) {
  //     visited[i - 1][j] = true;
  //     solveMaze(maze, row, col, i - 1, j, visited, path, output + "U");
  //     // back track
  //     visited[i - 1][j] = false;
  //   }

  //   optimized version below for moving in all direction

  const moveX = [1, 0, 0, -1];
  const moveY = [0, -1, 1, 0];
  const dir = ["D", "L", "R", "U"];

  for (let k = 0; k < dir.length; k++) {
    let newX = i + moveX[k];
    let newY = j + moveY[k];
    let newDir = dir[k];

    if (isSafe(newX, newY, row, col, maze, visited)) {
      visited[newX][newY] = true;
      solveMaze(maze, row, col, newX, newY, visited, path, output + newDir);
      // backtracking
      visited[newX][newY] = false;
    }
  }

  return path;
};

// Big O - TC 4^n as for each step 4 possible solution i.e function call are made
const mazeProblem = (maze, row, col) => {
  const visited = [];
  for (let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(false);
  }
  //   console.log(visited);

  visited[0][0] = true;
  const path = [];
  const output = "";

  return solveMaze(maze, row, col, 0, 0, visited, path, output);
};

console.log(mazeProblem(maze, row, col));
