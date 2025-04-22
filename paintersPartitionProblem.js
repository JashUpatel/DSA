// Painter partition problem
// user want to paint his dog's home that has n board with different length
// length of ith board is arr[i] where arr is array of n integers
// he hired k painters for the work and each pointer takes 1 unit of time to paint 1 unit of board
// find minimum time to get his job done if all painters start together with constraints
// that any painter will paint continous boards

const arr = [10, 20, 30, 40];
const n = 4;
const m = 2;

const isPossibleSolution = (arr, n, m, mid) => {
  let count = 1;
  let timeSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      return false;
    }

    if (arr[i] + timeSum > mid) {
      count++;
      timeSum = arr[i];
      if (count > m) {
        return false;
      }
    } else {
      timeSum = timeSum + arr[i];
    }
  }

  return true;
};

const minTime = (arr, n, m) => {
  let start = 0;
  let end = arr.reduce((acc, el) => acc + el);
  let ans = -1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (isPossibleSolution(arr, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};

console.log(minTime(arr, n, m));
