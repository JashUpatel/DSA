// find common elements from 3 arrays sorted in increasing order
// can you take care to duplicates without using additional data structure

const arr1 = [20, 1, 5, 10, 20, 40, 80];
const arr2 = [20, 6, 7, 20, 80, 100];
const arr3 = [20, 3, 4, 15, 20, 30, 70, 80, 120];

// common brute force approach would be 3 nested for loop to check common elements in 3 arrays using i,j,k pointers
// TC would be O(n^3) in this case

// approach 1: check common elements using 3 pointers
//  Big O is TC - O(n1+n2+n3) and SC = O(n)
//  since Set is an additional data structure approach is not valid
// stick with array

const findCommonElementsUsing3Pointers = (arr1, arr2, arr3) => {
  let [i, j, k] = [0, 0, 0];

  const out = [];
  //   const out = new Set(); //for handling duplicates

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      out.push(arr1[i]);
      //   out.add(arr1[i]);

      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  //   return out ? out : [-1]; // set does not have length property and not indexing
  return out.length ? out : [-1];
};

console.log(...findCommonElementsUsing3Pointers(arr1, arr2, arr3));
