// given array of integers nums having n+1 elements in range [1, n]
// there is only one repeated number
// return the repeated number without modifying the array and using constant space
// constraints: 1 <= n <= 10^5; nums.length = n+1; 1 <= nums[i] <= n;
// all integers expect one appears exactly once

const nums = [1, 3, 4, 2, 2];

// approach 1: using sorting the array and checking adjcent values for repeating integer
// Big O is O(nlogn) + O(n) => O(nlogn) i.e for sorting and comparing adjcent

const findRepeatingWithSort = (nums) => {
  nums.sort((a, b) => a - b);

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};

// console.log(findRepeatingWithSort(nums));

// approach 2: marking negative method
// since integer values is in range [1, n] hence we can treat integer of array as index
// we can check the position of the integer in the array and mark the value negative once visited
// the value already found negative is the repeated integer as it is marked negative earlier and visited again
// Big O is O(n) and SC is O(1)
// not valid as with this approach it is modifying the array

const negativeMarkingForRepeatingInt = (nums) => {
  let ans = -1;
  for (var i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]);
    if (nums[index] < 0) {
      ans = index;
      //   break;
      return ans;
    }
    nums[index] = nums[index] * -1;
  }
  return ans;
};

// console.log(negativeMarkingForRepeatingInt(nums));

// approach 3: positioning method
// swap the position of integer value to its index
// if the element is already present on the same index it is repeated
// Big O is O(n) and SP is O(1)
// not a valid as this also modifyies the array nums
// can be done via binarysearch

const postionSwapMethodForRepeatinngInt = (nums) => {
  while (nums[0] != nums[nums[0]]) {
    let temp = nums[0];
    nums[0] = nums[nums[0]];
    nums[temp] = temp;
    // [nums[0], nums[nums[0]]] = [nums[nums[0]], nums[0]];
  }
  return nums[0];
};

console.log(postionSwapMethodForRepeatinngInt(nums));
