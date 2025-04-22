// given an array consisting n integer which denotes the position of stall
// given integer k denotes number of aggressive cows
// assign stall to k cows such that minimum distance between any two of them is the maximum possible

// const stalls = [1, 2, 4, 8, 9];
// const n = 5;
// const k = 3;

const stalls = [10, 1, 2, 7, 5];
const n = 5;
const k = 3;

const isPossibleSolution = (stalls, n, k, mid) => {
  // can we place k cows with atleast mid distance between cows

  let count = 1;

  let pos = stalls[0];

  for (let i = 0; i < n; i++) {
    if (stalls[i] - pos >= mid) {
      count++;
      pos = stalls[i];
    }
    if (count == k) {
      return true;
    }
  }

  return false;
};

const maxPosition = (stalls, n, k) => {
  stalls.sort((a, b) => a - b);
  // sort the array of stalls with position just in case not sorted

  let start = 0;
  let end = stalls[stalls.length - 1] - stalls[0];
  // maximum possible range

  let ans = -1;

  while (start <= end) {
    let mid = (start + end) >> 1;

    if (isPossibleSolution(stalls, n, k, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};

console.log(maxPosition(stalls, n, k));
