// get P number of paratha for a function
// stall has L cooks each cook has a rank
// each cook can cook 1 paratha in R mins and next paratha in 2R min and next in 3R min so on.
// web master want min time to get the order done

const cooksRank = [1, 2, 3, 4];
const P = 10;

// const cooksRank = [1];
// const P = 8;

// const cooksRank = [8, 1, 1, 1, 1, 1, 1, 1, 1];
// const P = 8;

const isPossibleSolution = (cooksRank, P, mid) => {
  let pCount = 0;
  for (let i = 0; i < cooksRank.length; i++) {
    let R = cooksRank[i];
    let j = 1;
    let timeTaken = 0;

    while (true) {
      if (timeTaken + j * R <= mid) {
        pCount++;
        timeTaken = timeTaken + j * R;
        j++;
      } else {
        break;
      }
    }
  }

  //   console.log(pCount);

  return pCount >= P ? true : false;
};

const minTimeToGetOrder = (cooksRank, P) => {
  let start = 0;
  let maxRank = Math.max(...cooksRank);
  let end = maxRank * parseInt((P * (P + 1)) / 2);
  let ans = -1;

  while (start <= end) {
    let mid = (start + end) >> 1;

    if (isPossibleSolution(cooksRank, P, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};

console.log(minTimeToGetOrder(cooksRank, P));
