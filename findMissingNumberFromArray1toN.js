// find missing element from an array with duplicates
// size of array is n and element is in range [1, n]
// when value of element is in range of 1 to its size we can use value as index

// approach 1: negative marking the element
// check the value of elemenent and visit its position and mark it negative
// once all the elements are iterated the element that is left positive it's index is the missing value
// Big O TC - O(n) and SC- O(1)

const nums = [1, 3, 5, 3, 4];

const findMissingNumByNegativeMarking = (nums) => {
  for (i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]);
    if (nums[idx - 1] > 0) {
      nums[idx - 1] = nums[idx - 1] * -1;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1; // this will return 1st missing element if want all then return array or console log here
    }
  }
};

console.log(findMissingNumByNegativeMarking(nums));

// approach 2: sort and swap method
// sort the array by swapping the element to its index position
// once sorted check which value is not matching with its position that is the answer
// Big O - TC - O(n) SC - O(1)

const findMissingNumBySortnSwap = (nums) => {
  var i = 0;
  while (i < nums.length) {
    const idx = nums[i] - 1;
    if (nums[idx] != nums[i]) {
      // swap
      //   let temp = nums[i];
      //   nums[i] = nums[idx];
      //   nums[idx] = temp;
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
};

console.log(findMissingNumBySortnSwap(nums));
