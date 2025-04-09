// given an array of size n
// find first repeating element
// element should occur more than once and index of its first occurance should ne smallest
// the position return should be 1 based indexing
// return -1 in case no element is repeated
// expected TC is O(n) and SC is O(n)

// brute force approach is to check all element to rest and check by compare if found repeating return index
// this approach will be O(n^2) using 2 for loop
// problem expects TC O(n) hence not valid solution

const nums = [1, 5, 3, 4, 3, 5, 6];
// const nums = [1, 2, 3, 4];

// approach 1: using hash map
// iterate on the array and store the occurance of element in the hash table
// once iteration is done on array then iterate again to find which first element has more than 1 occurance

const findFirstRepeatingElement = (nums) => {
  const eleHashTable = {};

  for (var i = 0; i < nums.length; i++) {
    if (!eleHashTable[nums[i]]) {
      eleHashTable[nums[i]] = 1;
    } else {
      eleHashTable[nums[i]]++;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (eleHashTable[nums[i]] > 1) {
      return i + 1; // indexing should be 1 based as per problem
    }
  }
  return -1;
};

console.log(findFirstRepeatingElement(nums));
