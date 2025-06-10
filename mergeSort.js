// merge sort array

const arr = [4, 5, 13, 2, 12];

const mergeSortArr = (arr) => {
  let s = 0;
  let e = arr.length - 1;
  return mergeSort(arr, s, e);
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

console.log(mergeSortArr(arr));
