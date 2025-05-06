// reorganise a string
// given string s, rearrange the character of s so that any two adjacent character are not same
// return any posible rearrangement of s or return '' if not possible

const s = "aab";
// o/p - aba

// const s = "aaab";
// o/p  - ''

// Big TC - O(n)  SC - O(n)
const reorganiseStringWithNoSameAdjacent = (str) => {
  const charCount = {};
  // create a map of character with its count
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]] = charCount[str[i]] + 1;
    }
  }
  // O(N)

  //find character with max count
  let maxCount = 0;
  let maxCountChar = "";

  for (let j = 0; j < str.length; j++) {
    if (charCount[str[j]] > maxCount) {
      maxCount = charCount[str[j]];
      maxCountChar = str[j];
    }
  }
  // O(N)

  //   console.log(maxCount + " - " + maxCountChar);

  // create new string with rearranging characters with alternate max char
  // if length exceeds then size then no arrangement can be made return ''
  // else first arrange characters with most occurence at alternate position
  let idx = 0;
  const ans = str.split("");
  //   console.log(ans);

  while (maxCount > 0 && idx < str.length) {
    ans[idx] = maxCountChar;
    maxCount--;
    idx = idx + 2;
    charCount[str[maxCountChar]] = charCount[maxCountChar] - 1;
  }
  //   O(N)

  //   console.log(ans);
  //   console.log(maxCount);

  if (maxCount != 0) {
    // there are still element left to placed alternatively but string length exceeded
    // hence no rearrangement possible
    return "";
  }

  // place rest characters to return reorganised string
  for (let k = 0; k < str.length; k++) {
    // console.log(charCount[str[k]] + "-" + str[k]);
    // below conditon will be handled if count is decremented above
    // if (str[k] != maxCountChar) {
    // console.log(charCount[str[k]] + "-" + str[k] + "-" + idx);

    while (charCount[str[k]] > 0) {
      idx = idx + 2 > str.length - 1 ? 1 : idx + 2;
      ans[idx] = str[k];
      charCount[str[k]] = charCount[str[k]] - 1;
    }
    // }
  }
  //O(N*m) ~ O(N) in worst case

  return ans.join("");
};

console.log(reorganiseStringWithNoSameAdjacent(s));
