// given list of 24 hr clock time points in "HH:MM" format,
// return the minimum minutes difference between any two point in the list

// const timePoints = ["23:59", "00:00"];
const timePoints = ["00:00", "23:59", "00:00"];

const convertInMins = (timePoint) => {
  let mins =
    parseInt(timePoint.split(":")[0]) * 60 + parseInt(timePoint.split(":")[1]);

  return mins ? mins : 1440;
};

const findMinDifferenceByLoop = (timePoints) => {
  let timeDiff = 1440; //highest difference i.e 24hrs

  for (let i = 0; i < timePoints.length - 1; i++) {
    for (let j = i + 1; j < timePoints.length; j++) {
      let diff = Math.abs(
        convertInMins(timePoints[j]) - convertInMins(timePoints[i])
      );

      timeDiff = Math.min(diff, timeDiff);
    }
  }
  return timeDiff;
};

// Big O TC - O(n)  SC - O(n)
const findMinDifference = (timePoints) => {
  // convert into mins, easy for calculating difference
  // using map instead of for loop
  const mins = timePoints.map((time) => {
    let hrs = parseInt(time.split(":")[0]);
    let mins = parseInt(time.split(":")[1]);

    return hrs * 60 + mins;
    // return hrs * 60 + mins ? hrs * 60 + mins : 1440; //for managing 00:00 hrs difference
    // it will still miss edge case for 00:00 and 00:01 or so
  });

  //   sort the mins array as min difference would always between adjacent position

  mins.sort((a, b) => a - b);

  //   min diff would be smaller than the largest value
  let minDiff = mins[mins.length - 1];

  for (let i = 0; i < mins.length - 1; i++) {
    let diff = mins[i + 1] - mins[i];

    minDiff = Math.min(diff, minDiff);
  }

  // for scenario 00:00 and 23:59 something diff should be 1 calculating backward
  let diff1 = mins[0] + 1440 - mins[mins.length - 1];
  let diff2 = mins[mins.length - 1] - mins[0];
  let lastDiff = Math.min(diff1, diff2);

  return Math.min(minDiff, lastDiff);
  //   return minDiff;
};

console.log(findMinDifference(timePoints));
console.log(findMinDifferenceByLoop(timePoints));
