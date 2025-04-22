// book allocation problem
// given n number of books
// every ith book has Ai number of pages
// you have to allocate contigous book to m students
// in each case/permutation one of m student will be allocated maximum number of pages
// out of all the permutation find permutation in which maximum number of pages allocated is minimum compared to other permutations
// print that minimum value
// constraints: each book will be allocated to exactly one student
// each student has to be allocated atleast one book else return -1

const A = [12, 34, 67, 90];
const n = A.length;
const m = 2;

// case 1; 12 | 34, 67, 90 -> max page = 191
// case 2; 12, 34 | 67, 90 -> max page = 157
// case 3; 12, 34, 67 | 90 -> max page = 113 - solution

// instead of brute force approach checking every permutation will be lengthy
// so we try to define a search space in which possible answer lies
// i.e from 0 to total no. of pages in case every book is alloated to 1 student hypothetically
//

const isPossibleSolution = (A, n, m, sol) => {
  let pageSum = 0;

  let count = 1;

  for (let i = 0; i < n; i++) {
    if (A[i] > sol) {
      return false;
    }

    if (pageSum + A[i] > sol) {
      count++;
      pageSum = A[i];
      if (count > m) {
        return false;
      }
    } else {
      pageSum = pageSum + A[i];
    }
  }

  return true;
};

const findPages = (A, n, m) => {
  if (m >= n) return -1;

  let start = 0;
  let end = A.reduce((acc, el) => acc + el);
  let ans = -1;

  while (start <= end) {
    // let mid = parseInt((start + end) / 2);
    let mid = (start + end) >> 1;
    // another way for division by 2 in integer value only

    if (isPossibleSolution(A, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};

console.log(findPages(A, n, m));
