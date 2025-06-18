// leetcode med #53 maximum subarray
// given integer array nums find subarray with the largest sum
// and return the sum

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// o/p -  6  i.e [4,-1,2,1]

// const nums = [1];
// o/p  - 1

const maxSumSubArray = (nums, start, end) => {
  // base condition
  if (start == end) return nums[start];

  let maxLeftBorderSum = Number.MIN_SAFE_INTEGER;
  let maxRigthBorderSum = Number.MIN_SAFE_INTEGER;

  let mid = start + ((end - start) >> 1);

  let maxLeftSum = maxSumSubArray(nums, start, mid);
  let maxRightSum = maxSumSubArray(nums, mid + 1, end);

  // max cross border sum
  let leftBorderSum = 0;
  let rightBorderSum = 0;

  for (let i = mid; i >= start; i--) {
    leftBorderSum += nums[i];
    if (leftBorderSum > maxLeftBorderSum) maxLeftBorderSum = leftBorderSum;
  }

  for (let i = mid + 1; i <= end; i++) {
    rightBorderSum += nums[i];
    if (rightBorderSum > maxRigthBorderSum) maxRigthBorderSum = rightBorderSum;
  }

  let crossBorderSum = maxLeftBorderSum + maxRigthBorderSum;
  return Math.max(maxLeftSum, maxRightSum, crossBorderSum);
};

// approach 1: using divide and conquer algorithm
// Big O - TC O(nlogn)  SC O(logn) which is max depth in stack
const maxSubArray = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  return maxSumSubArray(nums, start, end);
};

// approach 2: brute force approach using nested loops
// Big O - TC O(n^3)  SC O(1)
const maxSubArrayWithLoops = (nums) => {
  let maxSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
        if (sum > maxSum) maxSum = sum;
      }
    }
  }

  return maxSum;
};

// approach 3: brute force approach with nested loops optimised version
// Big O - TC O(n^2)  SC O(1)
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArrayWithLoopsOptimised = (nums) => {
  let maxSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      sum += nums[j];
      if (sum > maxSum) maxSum = sum;
      //   console.log("sum", sum);
    }
  }

  return maxSum;
};

console.log(maxSubArray(nums));
console.log(maxSubArrayWithLoops(nums));
console.log(maxSubArrayWithLoopsOptimised(nums));
