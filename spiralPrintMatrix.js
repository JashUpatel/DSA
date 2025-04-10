// print matrix in spiral pattern

const inp = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const inp2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const printMatrixInSpiralPattern = (inp) => {
  const out = [];
  const totalElement = inp.length * inp[0].length;
  let startRow = 0;
  let endCol = inp[0].length - 1;
  let endRow = inp.length - 1;
  let startCol = 0;
  let count = 0;

  while (count < totalElement) {
    // for printing start row column wise
    // adding check for count so at any moment if during any push its value is equal to total element it break the loop
    for (var i = startCol; i <= endCol && count < totalElement; i++) {
      out.push(inp[startRow][i]);
      count++;
    }
    // increment start row so during next iteration duplicate element in top row is not printed again
    startRow++;

    // for printing end Column row wise top to bottom
    for (var i = startRow; i <= endRow && count < totalElement; i++) {
      out.push(inp[i][endCol]);
      count++;
    }
    // decrement end column value so during next iteration element in end col is not printed again
    endCol--;

    // for printing end row column wise end to start
    for (var i = endCol; i >= startCol && count < totalElement; i--) {
      out.push(inp[endRow][i]);
      count++;
    }
    // decrementing end row so during next iteration element in end row is not printed again
    endRow--;

    // for printing start column row wise bottom to top
    for (var i = endRow; i >= startRow && count < totalElement; i--) {
      out.push(inp[i][startCol]);
      count++;
    }
    // incrementing start col so during next iteration element in start col is not printed again
    startCol++;
  }

  return out;
};

console.log(...printMatrixInSpiralPattern(inp));
console.log(...printMatrixInSpiralPattern(inp2));
