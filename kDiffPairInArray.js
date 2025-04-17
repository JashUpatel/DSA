// given array of integers and an integer k return number of unique pair in array
// 0<= i,j < nums.length
// i!=j
// nums[i]-nums[j]==k

const nums = [3, 1, 4, 1, 5];
// const nums = [1, 1, 1, 1, 1];
const k = 2;
// const k = 0;

// approach 1: brute force approach check each element with rest to check diff and maintain count
// Big O TC- O(n^2) SC = O(n)

const kDiffInArray = (nums, k) => {
  //   let count = 0;

  //   for maintaining unique pairs we are using sets
  const mySet = new Set();

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        // only maintianing count will also consider duplicate pairs
        // count++;

        // facing challenge with objs in set hence convert into strings
        // In case of object uniqueness is considered using object reference not by its content
        // so only same object reference is considered duplicate
        // hence doing mySet.add({1:1}) twice will add two {1:1} as both would have unique reference
        // to check for exixtence by object content we have to implement custom logic such as by serializing object to string for comparing

        mySet.add(`${nums[i]}:${nums[j]}`);

        // let pair = { [nums[i]]: nums[j] };

        // if (!mySet.has(pair)) mySet.add(pair);
      }
    }
  }

  //   return count;
  return mySet.size;
};

// approach 2: two pointers approach
// first sort the array and use two pointers on array item to check the diff
// Big O TC - O(nlogn) + O(n) = O(nlogn) SC - O(n)

const kDiffInArrayUsingTwoPointers = (nums, k) => {
  let mySet = new Set();

  let i = 0;
  let j = 1;

  nums.sort((a, b) => a - b);

  while (j < nums.length) {
    if (Math.abs(nums[i] - nums[j]) == k) {
      mySet.add(`${[nums[i]]}: ${nums[j]}`);
      i++;
      j++;
    } else if (Math.abs(nums[i] - nums[j]) < k) {
      j++;
    } else {
      i++;
    }

    // we want distict pair without this condition element will compare with itself and if k is 0 will give incorrect o/p
    if (i == j) {
      j++;
    }
  }

  return mySet.size;
};

// approach 3: using binary search
// sort the array and apply binary search for the diff element
// Big O TC - O(nlogn) + O(nlogn) = O(nlogn) SC - (n)

// binary search O(logn)
const binarySearch = (nums, start, target) => {
  let end = nums.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = parseInt((start + end) / 2);
  }

  return -1;
};

const kDiffInArrayUsingBinarySearch = (nums, k) => {
  let mySet = new Set();

  nums.sort((a, b) => a - b); //O(nlogn)

  for (var i = 0; i < nums.length; i++) {
    if (binarySearch(nums, i + 1, nums[i] + k) != -1) {
      mySet.add(`${nums[i]}: ${nums[i] + k}`);
    }
  }
  return mySet.size;
};

console.log(kDiffInArray(nums, k));
console.log(kDiffInArrayUsingTwoPointers(nums, k));
console.log(kDiffInArrayUsingBinarySearch(nums, k));
