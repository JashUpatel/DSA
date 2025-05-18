// the string "PAYPALISHIRING" is written in zigzag pattern on given number of row like
// P   A   H    N
// A P L S I I  G
// Y   I   R
// and then read line by line "PAHNAPLSIIGYIR"

const s = "PAYPALISHIRING";
const numRow = 3;
// o/p - 'PAHNAPLSIIGYIR'

// Big O - TC O(n*m)

const convertZigzag = (str, numRow) => {
  if (numRow == 1) return str;

  const zigzag = [];

  let i = 0;
  let row = 0;
  let direction = 1;

  while (true) {
    if (direction) {
      while (row < numRow && i < s.length) {
        zigzag[row] ? (zigzag[row++] += s[i++]) : (zigzag[row++] = s[i++]);
      }
      row = numRow - 2;
    } else {
      while (row >= 0 && i < s.length) {
        zigzag[row] ? (zigzag[row--] += s[i++]) : (zigzag[row--] = s[i++]);
      }
      row = 1;
    }
    if (i >= s.length) break;
    direction = !direction;
  }

  let ans = "";
  for (let i = 0; i < zigzag.length; i++) {
    ans = ans + zigzag[i];
  }

  return ans;
};

const convertZigzagWithForLoop = (str, numRow) => {
  if (numRow == 1) return str;

  const zigzag = [];

  let row = 0;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    if (direction) {
      zigzag[row] ? (zigzag[row++] += s[i]) : (zigzag[row++] = s[i]);

      if (row >= numRow) {
        row = numRow - 2;
        direction = !direction;
      }
    } else {
      zigzag[row] ? (zigzag[row--] += s[i]) : (zigzag[row--] = s[i]);

      if (row < 0) {
        row = 1;
        direction = !direction;
      }
    }
  }

  let ans = "";
  for (let i = 0; i < zigzag.length; i++) {
    ans = ans + zigzag[i];
  }

  return ans;
};

console.log(convertZigzag(s, numRow));
console.log(convertZigzagWithForLoop(s, numRow));

// array
console.log(["a", "b", "c"] + ["d", "e", "f"]);
console.log(["abc"] + ["def"]);
console.log(["abc"] + ["def", "pqr"]);
console.log(["abc", "xyz"] + ["def", "pqr"]);
console.log([1, 2, 3] + [4, 5, 6]);
console.log(!1);
