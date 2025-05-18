// Largest Number LC #179

// Given list g non-negative integers nums
// arrange them in such that they form the largest number and return it
// since result may be very large retrun a string instead of integer

// const nums = [10, 2];
// o/p - 210

const nums = [3, 30, 34, 5, 9];
// o/p - 9534330

// Big O - TC O(nlogn)
const largestNumber = (nums) => {
  const result = nums.sort().reverse();

  let ans = [];
  for (let i = 0; i < result.length; i++) {
    let prevAns = ans.pop();

    if (
      parseInt("" + prevAns + "" + result[i]) >
      parseInt("" + result[i] + "" + prevAns)
    ) {
      prevAns ? ans.push(prevAns) : null;
      ans.push(result[i]);
    } else {
      ans.push(result[i]);
      prevAns ? ans.push(prevAns) : null;
    }
  }

  return ans.join("");
};

const largestNumberUsingSortCmp = (nums) => {
  const ans = nums.sort((a, b) => {
    let t1 = a.toString() + b.toString();
    let t2 = b.toString() + a.toString();
    return parseInt(t2) - parseInt(t1);
  });

  return ans.join("");
};

console.log(largestNumber(nums));
console.log(largestNumberUsingSortCmp(nums));

// array sort
// console.log(nums.sort());
// console.log(nums.sort().reverse()); // users sort and reverse together for descending sort
// console.log(nums.sort((a, b) => a - b)); //  ascending sort
// console.log(nums.sort((a, b) => b - a)); //  descending sort
// console.log(undefined ? 1 : 0);
// console.log(0 ? 1 : 0);
// console.log([].pop());
