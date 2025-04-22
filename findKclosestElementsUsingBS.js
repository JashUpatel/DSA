// given sorted array arr and two integers k and x,
//  return the k closest integers to x in the array
// result should be in the ascending order
// an integer is closer to x than b if
// |a-x|<|b-x| or |a-x|==|b-x| and a<b

const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 3;

// const arr = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
// const k = 4;
// const x = 35;

// const arr = [3, 5, 8, 10];
// const k = 2;
// const x = 15;

// approach 1: sort the array wrt difference with x and return first k elements
// brute force approach
// Big O - TC O(nlogn)

const findClosetElementUsingDiffSort = (arr, k, x) => {
  // just for deep copy so that arr remain intact
  const diffArr = [...arr];
  diffArr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));

  return diffArr.slice(0, k).sort((a, b) => a - b);
};

// approach 2:  two pointers apporach
// Big O - TC O(n-k) = O(n)

const findClosestElementUsing2Pointer = (arr, k, x) => {
  let l = 0;
  let h = arr.length - 1;

  while (h - l >= k) {
    if (Math.abs(x - arr[l]) > Math.abs(arr[h] - x)) {
      l++;
    } else {
      h--;
    }
  }
  return arr.slice(l, h + 1);
};

// approach 3: binary search with 2 pointer
// find lower bound ie closest element to x
// and then using two pointers expand range l and h to k
// Big O - TC O(logn) + O(k) = O(n)

const lowerBoundElementUsingBS = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = end;
  // initialize with end so if value of x is more than end it will return end and not -1
  //   let mid = parseInt((start + end) / 2);

  while (start <= end) {
    // gives same result as declaring outside
    let mid = parseInt((start + end) / 2);

    // if (arr[mid] >= x) {
    //   ans = mid;
    //   end = mid - 1;
    // } else if (x > arr[mid]) {
    //   start = mid + 1;
    // } else {
    //   end = mid - 1;
    // }

    if (arr[mid] >= x) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
      // both condition working but this seems to be more consice then from above as in vid
    }

    // console.log(start, end);
    // mid = parseInt((start + end) / 2);
    // console.log(mid);
  }

  return ans;
};

const findClosestElementUsingBS = (arr, k, x) => {
  let h = lowerBoundElementUsingBS(arr, x);
  let l = h - 1;

  //   console.log(l, h);

  while (k--) {
    // for condition when lower bound is 0 or last position
    if (l < 0) {
      h++;
    } else if (h >= arr.length) {
      l--;
    } else if (x - arr[l] > arr[h] - x) {
      h++;
    } else {
      l--;
    }
  }

  return arr.slice(l + 1, h);
};

console.log(findClosetElementUsingDiffSort(arr, k, x));
console.log(findClosestElementUsing2Pointer(arr, k, x));
console.log(findClosestElementUsingBS(arr, k, x));
