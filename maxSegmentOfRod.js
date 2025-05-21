// find max segment that can be created frm rod of length N
// provided that each segment should be of length x,y,z

const n = 7;
const x = 5;
const y = 2;
const z = 2;

// const n = 7;
// const x = 5;
// const y = 3;
// const z = 3;

const solveByRecursiveFunc = (n, x, y, z) => {
  // base condition
  if (n == 0) return 0;

  if (n < 0) return Number.MIN_SAFE_INTEGER;

  let ans1 = solveByRecursiveFunc(n - x, x, y, z) + 1;
  let ans2 = solveByRecursiveFunc(n - y, x, y, z) + 1;
  let ans3 = solveByRecursiveFunc(n - z, x, y, z) + 1;

  let ans = Number.MIN_SAFE_INTEGER;
  ans = Math.max(ans1, ans2, ans3);
  return ans;
};

const maxSegmentOfRod = (n, x, y, z) => {
  let ans = solveByRecursiveFunc(n, x, y, z);
  //   return int min in case of invalid scenario
  return ans < 0 ? 0 : ans;
};

console.log(maxSegmentOfRod(n, x, y, z));
