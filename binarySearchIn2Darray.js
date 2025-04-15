// binary search in 2D sorted array
// 2D array is stored in linear memory space
// using formula for position  C*i + j
// C is total no. of column
// i is ith row
// j is jth col

const nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const binarySearchOn2DArray = (nums, target) => {
  let tRow = nums.length;
  let tCol = nums[0].length;
  let start = 0;
  let end = tRow * tCol - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    // getting row index from memory space value using C*i+j
    // so rowIndex would be memSpace/totCol for multipication and colIndex would be memSpace%totCol for addition

    let rowIdx = parseInt(mid / tCol);
    let colIdx = parseInt(mid % tCol);

    if (nums[rowIdx][colIdx] == target) {
      return [rowIdx, colIdx];
    }

    if (nums[rowIdx][colIdx] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }

  return -1;
};

console.log(binarySearchOn2DArray(nums, 19));
