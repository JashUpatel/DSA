// given an array nums of length n with value 0,1,2 representing red, blue, white resp.
// sort the array in-place so that the same colors are in adjacent position
// without using in-built sort function
//
// constraints: n = nums.length; 1<=n<=300; nums[i] is either 0,1, or 2;

const nums = [2, 0, 2, 1, 1, 0];

// approach 1 - using built-in sort method
// not valid as mentioned to not use built-in method
// built-in sort functions in JS sorts by converting element into strings so
// to perform sort in numeric value we pass compare function
// Big O of sort function depend on how it is implemented on the different platforms i.e. browsers
// mostly it's Big O is n(log n);

const sortNums = (nums) => nums.sort((a, b) => a - b);
console.log(sortNums(nums));

// approach 2 - counting method
// counting the occurence and rebuilding the array in sorted order
// not valid as we want in-place sort in problem so cannot overwrite or create new array
// Big O of this approach is n + n = 2n => O(n)

const sortNumsByCount = (nums) => {
  let [zeros, ones, twos] = [0, 0, 0];
  const out = [];

  nums.forEach((el) => {
    if (el === 0) {
      zeros++;
    } else if (el === 1) {
      ones++;
    } else {
      twos++;
    }
  });

  while (zeros--) {
    out.push(0);
    // zeros--;
  }
  while (ones--) {
    out.push(1);
    // ones--;
  }
  while (twos--) {
    out.push(2);
    // twos--;
  }

  return out;
};

console.log(sortNumsByCount(nums));

// approach 3 - Three pointers approach
// for in-place sort on array we create 3 indexes i.e low, medium pointing to 1 element
// and high pointing to last element
// low will shuffle 0 at begin, medium shuffle 1 in between after 0 and high will shuffle 2 at end at the end of loop
// when medium gets higher than high i.e m<=h in loop array will be sorted in-place
// there is no built-in swap method in Js so we used array destructuring to swap vars
// or we can create swap function using array destructuring
//
//  function swap([x, y]) {
//     return [y, x];
// }
// let [a, b] = swap([5, 10]);
//
// Big O for this approach is O(n)

const sortWithThreePointers = (nums) => {
  let l = 0;
  let m = 0;
  let h = nums.length - 1;

  while (m <= h) {
    if (nums[m] === 0) {
      [nums[l], nums[m]] = [nums[m], nums[l]];
      l++;
      m++;
    } else if (nums[m] === 1) {
      m++;
    } else {
      [nums[h], nums[m]] = [nums[m], nums[h]];
      h--;
    }
  }

  return nums;
};

console.log(sortWithThreePointers(nums));
