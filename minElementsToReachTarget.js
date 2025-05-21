// given an array find minimum number of element required to reach the target

const target = 5;
const arr = [1, 2];

const solveByRecursiveFunc = (arr, target) => {
  // base case
  if (target == 0) return 0;

  // return max so that it is not considered in min function
  if (target < 0) return Number.MAX_SAFE_INTEGER;

  let minEle = Number.MAX_SAFE_INTEGER;

  for (let i in arr) {
    // calling recursive for remaining target
    let ans = solveByRecursiveFunc(arr, target - arr[i]);
    // console.log(ans);

    // considering the element so adding 1 to ans returned and handling if max int is returned
    ans != Number.MAX_SAFE_INTEGER
      ? (minEle = Math.min(ans + 1, minEle))
      : null;
  }

  return minEle;
};

const minElementForTarget = (arr, target) => {
  let ans = solveByRecursiveFunc(arr, target);
  return ans;
};

console.log(minElementForTarget(arr, target));
