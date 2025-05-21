// find element in array in O(logn) for sorted array

const nums = [2, 4, 6, 8, 10, 12, 16];

const binarySearchMethod = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }
  return -1;
};

// Big O TC O(log n) SC O(k log n) where k is memory required in stack for single call
// TC remains same but SC increase as function calls take memory in stack with each call
const binarySearchRecursiveFunc = (nums, start, end, target) => {
  // base condition for breaking/termination
  if (start > end) {
    return -1;
  }

  let mid = parseInt((start + end) / 2);

  // recursive conditions
  if (nums[mid] == target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursiveFunc(nums, mid + 1, end, target);
  } else {
    return binarySearchRecursiveFunc(nums, start, mid - 1, target);
  }
};

const binarySearchMethodUsingRecursion = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  const ans = binarySearchRecursiveFunc(nums, start, end, target);
  return ans;
};

console.log(binarySearchMethod(nums, 2));
console.log(binarySearchMethodUsingRecursion(nums, 2));
