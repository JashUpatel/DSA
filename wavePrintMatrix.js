// print the matrix in wave pattern

const inp = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const printWavePatternMatrix = (inp) => {
  const out = [];

  // first loop to iterate column wise
  for (var col = 0; col < inp[0].length; col++) {
    // check if column number is even then iterate top to bottom else bottom to top

    if ((col & 1) == 0) {
      for (var row = 0; row < inp.length; row++) {
        out.push(inp[row][col]);
      }
    } else {
      for (var row = inp.length - 1; row >= 0; row--) {
        out.push(inp[row][col]);
      }
    }
  }
  return out;
};

console.log(...printWavePatternMatrix(inp));
