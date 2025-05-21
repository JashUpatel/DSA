// find max sum of non adjacent elements from array

// return maximum sum of the subsequence in which no elements are adjacents
const nums = [2, 1, 4, 9];

const solveByRecursiveFunc = (nums, sum, pos, max) => {
  // base condition
  if (pos >= nums.length) {
    // max update
    let max1 = max.pop();
    max = max.push(Math.max(sum, max1));
    return;
  }

  // include case
  // pos+2 as non adjacents
  solveByRecursiveFunc(nums, sum + nums[pos], pos + 2, max);

  // exclude case
  // skip the element with pos+1
  solveByRecursiveFunc(nums, sum, pos + 1, max);
};

const maxSumOfNonAdjacentEle = (nums) => {
  let sum = 0;
  let max = [Number.MIN_SAFE_INTEGER];

  let pos = 0;

  // function does not return anything
  // using max array instead of value to use pass by reference in js
  // and store and maintain max value during nested function calls
  solveByRecursiveFunc(nums, sum, pos, max);
  return max.pop();
};
console.log(maxSumOfNonAdjacentEle(nums));
