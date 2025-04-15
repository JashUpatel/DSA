// binary search in nearly sorted array
// In nearly sorted element can be in i-1, i, i+1 th position compared to actual sorted position

const nums = [10, 3, 40, 20, 50, 80, 70];

const binarySearchOnNearlySortedArray = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    // check 3 condition in nearly sorted array instead of one in sorted array
    if (nums[mid] == target) {
      return mid;
    }

    // handling negative index position
    if (mid < nums.length - 1 && nums[mid + 1] == target) {
      return mid + 1;
    }

    // handling greater than length index position
    if (mid > 0 && nums[mid - 1] == target) {
      return mid - 1;
    }

    if (nums[mid] < target) {
      start = mid + 2;
    } else {
      end = mid - 2;
    }

    mid = parseInt((start + end) / 2);
  }

  return -1;
};

console.log(binarySearchOnNearlySortedArray(nums, 70));
