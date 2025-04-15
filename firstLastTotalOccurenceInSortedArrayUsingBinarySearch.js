// first occurence in the sorted array using binary search method
// TC - O(logn) SC - O(1)

const nums = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 9];

const firstOccurenceUsingBinarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);
  var ans = -1;

  while (start <= end) {
    if (nums[mid] == target) {
      ans = mid;
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }

  return ans;
};

const lastOccurenceUsingBinarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);
  var ans = -1;

  while (start <= end) {
    if (nums[mid] == target) {
      ans = mid;
      start = mid + 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }

  return ans;
};

const totalOccurenceUsingBinarySearch = (nums, target) => {
  let first = firstOccurenceUsingBinarySearch(nums, target);
  let end = lastOccurenceUsingBinarySearch(nums, target);
  var ans = end - first + 1;

  return ans;
};

console.log(firstOccurenceUsingBinarySearch(nums, 4));
console.log(lastOccurenceUsingBinarySearch(nums, 4));
console.log(totalOccurenceUsingBinarySearch(nums, 4));
