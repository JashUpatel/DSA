// move all the negative elements in the array to the left and positive to right
// order of the element is not important only maintain negative and positive to one side

const inp = [1, 2, -3, 4, -5, 6];

// approach 1: sort the array to move all negative on left at the start using built-in sort method
// it will result in in-place sort of array
// Big O is O(nlogn) for built-in sort method

const moveNegativeBySort = (inp) => inp.sort((a, b) => a - b);

console.log(moveNegativeBySort(inp));

// approach 2: two pointers approach or dutch national flag approach
// this approach can be used for shuffling array of 0 and 1 at one side
// using two indexes for shuffling i.e low to point negative number and high to point to positive number
// Big O is O(n) for TC and O(1) for SC

const moveNegativeByTwoPointer = (inp) => {
  let l = 0;
  let h = inp.length - 1;

  while (l < h) {
    if (inp[l] < 0) {
      l++;
    } else if (inp[h] > 0) {
      h--;
    } else {
      [inp[l], inp[h]] = [inp[h], inp[l]];
    }
  }

  return inp;
};

console.log(moveNegativeByTwoPointer(inp));
