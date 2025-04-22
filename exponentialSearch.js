// Exponential search to find the element
// it is applicable on sorted arrays only
// exponential search is improvised/optimised use of binary search
// by searching using binary search in specific search space only
// can be used to search in infinite array (unbounded array)
// binary search fails in case if infinite array as it can get end of array
// better than binary search when target is in begining
// Big O time complexity of exponential search is O(logn) in general as it uses binary search
// but as it is optimized version of binary search
// so can be said that time complexity is O(logi) where i is the index of target element
// or can be represented as O(log(logn)) where n is array length
// as it takes time to find target grows logarithmically with logarithm of size of array

const nums = [3, 4, 5, 6, 11, 13, 14, 15, 56, 70];

const searchInUnboundArrayUsingBruteForce = (nums, target) => {
  let i = 0;
  while (1) {
    if (nums[i] > target) {
      // break;
      return -1;
    } else if (nums[i] == target) {
      return i;
    } else {
      i++;
    }
  }
};

const binarySearch = (nums, start, end, target) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

const findElementUsingExponentialSearch = (nums, target) => {
  if (nums[0] === target) {
    return 0;
  }

  let i = 1;

  //  in case of infinite array validation to check array length can be skipped

  while (i < nums.length && nums[i] <= target) {
    i = i * 2;
  }

  return binarySearch(nums, i / 2, Math.min(i, nums.length - 1), target);
};

console.log(findElementUsingExponentialSearch(nums, 6));
