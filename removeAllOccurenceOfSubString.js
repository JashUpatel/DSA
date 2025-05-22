// given 2 strings s and part
// perform following operation on s untill all occurence of substring part are removed
// find leftmost occurence of substring part and remove it from s.
// return s after revoming all the occurence of part

let s = "daabcbaabcbc";
let part = "abc";
// o/p - dab

// Big O TC - O(n) SC - O(1)
const removeOccurenceOfSubstring = (str, subStr) => {
  let ans = str.slice(0, subStr.length - 1);
  let ptr = subStr.length;

  while (ptr < str.length) {
    if (ans.length < subStr.length) {
      ans = ans + str[ptr];
    } else {
      let ansStr = ans.slice(ans.length - subStr.length, ans.length - 1);

      if (ansStr == subStr) {
        ans.slice(ans.length - subStr.length, ans.length - 1);
      }
    }

    // console.log(ans);
    ptr++;
  }

  return ans;
};

// Big O TC - O(n) SC - O(1)
const removeOccurence = (str, subStr) => {
  let pos = str.search(subStr);
  while (pos != -1) {
    str = str.slice(0, pos) + str.slice(pos + subStr.length);
    pos = str.search(subStr);
  }

  return str;
};

const removeOccurenceRecursiveFunc = (ans, part) => {
  // console.log(ans);
  // console.log(ans.join(""));
  let pos = ans.join("").search(part);
  // base case
  if (pos != -1) {
    // remove the sub string
    // using slice will make new copy of ans and operate on it
    // so does the split
    // hence the ans in main function will remain same
    // to handle that use splice which operate directly on the array

    // let leftStr = ans.join("").slice(0, pos);
    // let rightStr = ans.join("").slice(pos + part.length, ans.length);
    ans.splice(pos, part.length);

    // ans = leftStr + rightStr;
    // console.log(ans.slice(0, pos));
    // return removeOccurenceRecursiveFunc(ans.split(""), part);
    removeOccurenceRecursiveFunc(ans, part);
  } else {
    return;
    // return ans;
    // something needs to be returned else will print undefined
  }
};

const removeOccurenceUsingRecursion = (s, part) => {
  let ans = s.split("");

  // ans = removeOccurenceRecursiveFunc(ans, part);
  removeOccurenceRecursiveFunc(ans, part);

  return ans.join("");
};

console.log(removeOccurenceUsingRecursion(s, part));
console.log(removeOccurenceOfSubstring(s, part));
console.log(removeOccurence(s, part));

// pass by reference

// slice returns new string/array
// splice operates on the same array but returns removed values in array

const dummy = ["0", "1", "2", "3"];
const dummyStr = "abcd".split("");
const dummyStr2 = dummyStr;
const dummyStr3 = "789";

const passByReference = (dummy, dummyStr, dummyStr3) => {
  let myDummy = dummy;
  let myDummyStr = dummyStr;
  // dummy[0] = "11";
  myDummy[0] = "12";

  dummyStr = dummyStr.splice(2);
  // dummyStr.splice(2);
  console.log(dummyStr);
  dummyStr[0] = "z";
  dummyStr2[2] = "y";
  console.log(dummyStr);

  // dummyStr3 = dummyStr3 + "456";
  dummyStr3 + "456";
  console.log(dummyStr3);
  // return myDummy;
  return myDummyStr;
};

// console.log(passByReference(dummy, dummyStr2, dummyStr3));
// console.log(dummy);
// console.log(dummyStr);
// console.log(dummyStr2);
// console.log(dummyStr3);
