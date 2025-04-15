// find element in array in O(logn) for sorted array

const nums = [2, 4, 6, 8, 10, 12, 16];

const binarySearchMethod = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt(start + end) / 2;

  while (start <= end) {
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt(start + end) / 2;
  }
  return -1;
};

console.log(binarySearchMethod(nums, 2));
