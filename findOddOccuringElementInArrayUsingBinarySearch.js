// find element occuring odd times in the array
// all elementt occur even no of time except one
// all repeating rlement occur in pair

// repeating element have 1st element on even position and last on odd position
// the required element would be also on even position only
// perform binary search on index with odd even condition to get required element

// can XOR on all element to find odd occuring element but it's O(n)

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 3, 600, 600, 4, 4];

const findOddOccuringElementArray = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    // single element left
    if (start == end) {
      return nums[start];
    }

    // for even index positions
    if (mid % 2 == 0) {
      // if equal move right
      if (mid < nums.length && nums[mid] == nums[mid + 1]) {
        start = mid + 2;
      } else {
        end = mid;
      }
    } else {
      // for odd index positions

      if (mid > 0 && nums[mid] == nums[mid - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
        // mid -1 because odd element would be on even position only as per observation hence neglecting the mid position in this cases
      }
    }

    mid = parseInt((start + end) / 2);
  }
};

console.log(findOddOccuringElementArray(nums));
