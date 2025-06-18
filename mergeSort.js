// merge sort array

const arr = [4, 5, 13, 2, 12];

const mergeSortArr = (arr) => {
  let s = 0;
  let e = arr.length - 1;
  return mergeSort(arr, s, e);

  // below approach also works fine with mergeInPlaceWithQuickSort
  // mergeSort(arr, s, e);
  // return arr;
};

const mergeSort = (arr, s, e) => {
  // base case
  if (s >= e) return;

  let mid = parseInt((s + e) / 2);

  // sort left part by recursion
  mergeSort(arr, s, mid);

  // sort right part by recursion
  mergeSort(arr, mid + 1, e);

  // merge the sorted array
  return merge(arr, s, e);

  // merge Inplace with SC O(1)
  // return mergeInPlace(arr, s, e);
  // return mergeInPlaceWithQuickSort(arr, s, e);

  // both approach works return array from inside function or return arr from here
  // or can console log here to print sorted arr
  // mergeInPlaceWithQuickSort(arr, s, e);
  // return arr;
};

const merge = (arr, s, e) => {
  let mid = parseInt((s + e) / 2);
  let len1 = mid - s + 1;
  let len2 = e - mid;

  const leftArr = new Array(len1);
  const rightArr = new Array(len2);

  //   copy values in left and right array

  let k = s;
  for (let i = 0; i < len1; i++) {
    leftArr[i] = arr[k];
    k++;
  }

  k = mid + 1;
  for (let i = 0; i < len2; i++) {
    rightArr[i] = arr[k];
    k++;
  }

  // merge logic

  let leftIndex = 0;
  let rightIndex = 0;
  let mainArrIndex = s;

  while (leftIndex < len1 && rightIndex < len2) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      arr[mainArrIndex++] = leftArr[leftIndex++];
      // mainArrIndex++;
      // leftIndex++
    } else {
      arr[mainArrIndex++] = rightArr[rightIndex++];
      // mainArrIndex++;
      // rightIndex++
    }
  }

  // copy left Arr
  while (leftIndex < len1) {
    arr[mainArrIndex++] = leftArr[leftIndex++];
  }

  while (rightIndex < len2) {
    arr[mainArrIndex++] = rightArr[rightIndex++];
  }

  //   return the merged array
  return arr;
};

// merge function can be implemented like this by passing temp array and mid
// here we are using temp array result in SC O(n)
function merge2(arr, temp, start, end, mid) {
  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= end) temp[k++] = arr[j++];
  while (start <= end) {
    arr[start] = temp[start];
    start++;
  }

  return arr;
}

// we can merge inplace instead of using temp array to reduce SC for that
// approach 1: 2 pointer + quick sort method
// we need to pointers i, j to the indexes start and mid+1
// compare arr[i]>arr[j] then swapp the element
// and then use quick sort to find the correct position of swapped element in 2nd half of array
// i.e sort the 2 half of array
// repeat till i<=mid

const mergeInPlaceWithQuickSort = (arr, start, end) => {
  let i = start;
  let mid = (start + end) >> 1;
  let j = mid + 1;

  while (i <= mid) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      quickSortSwap(arr, j, end);
      // console.log(arr);
    } else {
      i++;
    }
  }

  // if return arr from parent function
  // return arr;
};

const quickSortSwap = (arr, j, end) => {
  let el = arr[j];
  let count = 0;
  for (let i = j + 1; i <= end; i++) {
    if (arr[i] <= el) count++;
  }

  // after looping we get the right position for pivot element
  let rightIndex = j + count;
  // swap the position
  [arr[j], arr[rightIndex]] = [arr[rightIndex], arr[j]];
};

// approach 2:
// Using GAP method for in place merge sorted array to optimise SC and make it O(1)
const mergeInPlace = (arr, start, end) => {
  let totalLen = end - start + 1;
  // gap is calculated as ceil((n+m)/2) n and m are size of the arrays
  // same can be calculated as below
  let gap = parseInt(totalLen / 2) + (totalLen % 2);

  while (gap > 0) {
    let i = start;
    let j = start + gap;
    while (j <= end) {
      if (arr[i] > arr[j]) {
        // swapp the position
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      i++;
      j++;
    }
    gap = gap <= 1 ? 0 : parseInt(gap / 2) + (gap % 2);
  }
  return arr;
};

console.log(mergeSortArr(arr));
