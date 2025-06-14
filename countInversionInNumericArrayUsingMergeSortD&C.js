// count inversion problem
// In an array arr, the element at position i and j where i<j
// forms an inversion arr[i]>arr[j]
// to correct the inversion we swapp the elements
// return the number of inversions
// imp for interviews when they test knowledge about merge sort

const arr = [8, 4, 2, 1];
// o/p - 6    i.e (8,4),(8,2) (8,1), (4,2), (4,1), (2,1)

// bruteforce approach : count the inversion by looping through each pair
// Big O - TC O(n^2)  SC - O(1)
const countInversionUsingLoop = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // start with i+1 as for inversion j>i
    for (let j = i + 1; j < arr.length; j++) {
      // count increment when value at i > value at j
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
};

// optimal appraoch: using merge sort
// in merge sort we break recursively and merge in sorted way
// Big O - TC O(nlogn)  SC  O(n)
const countInversionUsingMergeSort = (arr) => {
  let count = 0;
  const tempArr = [];
  let start = 0;
  let end = arr.length - 1;
  //   return mergeSort(arr, tempArr, start, end);
  // for count
  count = mergeSort(arr, tempArr, start, end);
  return count;
};

const mergeSort = (arr, tempArr, start, end) => {
  // base condition
  if (start >= end) return 0;

  let mid = parseInt((start + end) / 2);

  var count = 0;
  // recursion
  count += mergeSort(arr, tempArr, start, mid);

  count += mergeSort(arr, tempArr, mid + 1, end);

  count += merge(arr, tempArr, start, mid, end);

  //   console.log("fin", count);
  //   return arr;
  return count;
};

const merge = (arr, tempArr, start, mid, end) => {
  let i = start;
  let j = mid + 1;
  let k = start;

  //   even declare array here instead of passing will also work the same
  //   const tempArr =[];
  let count = 0;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      tempArr[k++] = arr[i++];
    } else {
      // inversion condition  i<j and arr[i]>arr[j]
      tempArr[k++] = arr[j++];
      //   count calculate
      count += mid - i + 1;
      //   console.log(count);
    }
  }

  while (i <= mid) {
    tempArr[k++] = arr[i++];
  }

  while (j <= end) {
    tempArr[k++] = arr[j++];
  }

  while (start <= end) {
    arr[start] = tempArr[start];
    start++;
  }

  //   console.log("retrun", count);
  return count;
};

console.log(countInversionUsingLoop(arr));
console.log(countInversionUsingMergeSort(arr));
