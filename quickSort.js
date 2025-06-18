// quick sort array

const arr = [8, 1, 3, 4, 20, 50, 30];

// Big O - TC O(nlogn) for avg case
// O(n^2) worst case i.e reversed sorted

// TC of quick sort is O(nlogn) because each partitioning logic take liner time O(n)
// and no of time we need to partition is O(logn)
// in worst case we need to partition n times and each partition takes O(n)time so O(n^2);

const quickSortArr = (arr) => {
  let s = 0;
  let e = arr.length - 1;
  return quickSort(arr, s, e);
};

const quickSort = (arr, s, e) => {
  // base case
  if (s >= e) return;

  // partition logic return pivotIndex
  let p = partition(arr, s, e);

  // recursive calls
  // pivot element -> left
  quickSort(arr, s, p - 1);

  // pivot element -> right
  quickSort(arr, p + 1, e);

  return arr;
};

const partition = (arr, s, e) => {
  // choose pivot element
  let pivotIndex = s;
  let pivotEle = arr[s];

  // find right position for pivot element and place it there
  let count = 0;
  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivotEle) count++;
  }

  // after looping we get the right position for pivot element
  let rightIndex = s + count;
  // swap the position
  [arr[pivotIndex], arr[rightIndex]] = [arr[rightIndex], arr[pivotIndex]];
  pivotIndex = rightIndex;

  // all  element  smaller in left and larger in right
  let i = s;
  let j = e;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivotEle) i++;

    while (arr[j] > pivotEle) j--;

    // 2 cases - found elements to swap or no need to swap;
    if (i < pivotIndex && j > pivotIndex) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return pivotIndex;
};

// another approach to implement quick sort with better partition method
const quickSortWithBetterPartition = (arr, start, end) => {
  // base case
  if (start >= end) return;

  let pivot = end;
  let i = start - 1;
  let j = start;

  while (j < pivot) {
    if (arr[j] < arr[pivot]) {
      ++i;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }

  ++i;
  [arr[i], arr[pivot]] = [arr[pivot], arr[i]];

  quickSortWithBetterPartition(arr, start, i - 1);
  quickSortWithBetterPartition(arr, i + 1, end);
};

const quickSortArr2 = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  quickSortWithBetterPartition(arr, start, end);
  return arr;
};

console.log(quickSortArr(arr));
console.log(quickSortArr2(arr));
