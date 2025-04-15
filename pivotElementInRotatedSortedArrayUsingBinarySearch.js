// pivot element in rotated and sorted array
// input is rotated and sorted array with no duplicates (assumption that all unique element)
// use binary search to pind pivot element in O(logn) TC

const nums = [9, 10, 2, 4, 6, 8];

const pivotElementUsingBinarySearch = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    // console.log(mid);
    if (start == end) {
      // single element
      // should not return -1 so handle incase for non rotated array i.e sorted array
      return start;
    }
    if (mid <= end && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid - 1 >= start && nums[mid - 1] > nums[mid]) {
      return mid - 1;
    }
    if (nums[start] < nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = parseInt((start + end) / 2);
  }

  return -1;
};

// binary search method with search class usecase
const binarySearchMethod = (nums, start, end, target) => {
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

// search element in rotated sorted array
// Big O - TC O(logn)+O(logn) = O(logn)
const searchElementInRotatedSortedArray = (nums, target) => {
  const pivotIndex = pivotElementUsingBinarySearch(nums);
  let ans = -1;

  // search in Left side
  if (target >= nums[0] && target <= nums[pivotIndex]) {
    ans = binarySearchMethod(nums, 0, pivotIndex, target);
  } else {
    ans = binarySearchMethod(nums, pivotIndex + 1, nums.length - 1, target);
  }

  return ans;
};

console.log(pivotElementUsingBinarySearch(nums));
console.log(searchElementInRotatedSortedArray(nums, 4));
