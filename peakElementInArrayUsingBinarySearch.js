// find peak element in mountain array using binary search
// Big O TC - O(logn) SC - O(1)

// const nums = [0, 10, 5, 2];
// const nums = [1, 2, 3, 1];
const nums = [1, 2, 1, 3, 5, 6, 4];

peakElementUsingBinarySearch = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);
  //   let ans = -1;

  while (start < end) {
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      //   ans = mid;
      end = mid;
    }

    mid = parseInt((start + end) / 2);
  }

  return start;
};

console.log(peakElementUsingBinarySearch(nums));
