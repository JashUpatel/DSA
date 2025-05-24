// leetcode #279

// given integer n return the least number of perfect square number that sums to n
// perfect square is integer that is square of an integer
// i.e 1,4,9,16...

// const n = 12;
// o/p - 3
// i.e - 4+4+4

const n = 13;
// o/p - 2
// i.e 4+9

const numPerfectSquareRecursiveFunc = (n) => {
  //   console.log(n);

  // base case
  if (n == 0) return 1;
  if (n < 0) return 0;

  // solution check
  let ans = Number.MAX_SAFE_INTEGER;
  let start = 1;
  let end = parseInt(Math.sqrt(n));
  while (start <= end) {
    let pfSq = start * start;
    let numOfpfSq = 1 + numPerfectSquareRecursiveFunc(n - pfSq);

    // console.log("--->", numOfpfSq);

    if (numOfpfSq < ans) {
      ans = numOfpfSq;
    }

    start++;
  }

  return ans;
};

// num of perfect square for sum via recursive method
// Big O  TC - O(sqrt(n)^n) ~ O(n^(n/2)) = O(n^n)
// SC - O(n) as maximum depth for recursive function will be till n
const numPerfectSquare = (n) => {
  return numPerfectSquareRecursiveFunc(n) - 1;
};

console.log(numPerfectSquare(n));
