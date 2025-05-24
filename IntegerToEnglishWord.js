// leetcode #273 - hard
// convert given integer to english word

const num = 1234567;
// o/p - one million two hundred thirty four thousand five hundred sixty seven

// const map
const IntToWordMap = [
  [1000000000, "Billion"],
  [1000000, "Million"],
  [1000, "Thousand"],
  [100, "Hundred"],
  [90, "Ninety"],
  [80, "Eighty"],
  [70, "Seventy"],
  [60, "Sixty"],
  [50, "Fifty"],
  [40, "Fourty"],
  [30, "Thirty"],
  [20, "Twenty"],
  [10, "Ten"],
  [9, "Nine"],
  [8, "Eigth"],
  [7, "Seven"],
  [6, "Six"],
  [5, "Five"],
  [4, "Four"],
  [3, "Three"],
  [2, "Two"],
  [1, "One"],
];

// Solving the Integer to English word using recursion
// Big O - TC O(log10 n)  SC O(log10 n)
// note it is log to base 10 and not 2
// English words would be same or 1 more than the size of the number
// In above case TC will be ceil(log10 n) = log10 n
// SC will be O(log10 n) as it will  be same as total size of the number length
const integerToword = (num) => {
  if (num == 0) return "Zero";

  for (let k in IntToWordMap) {
    if (num >= IntToWordMap[k][0]) {
      //   console.log(IntToWordMap[k][0]);
      let a = "";
      if (num > 100) {
        a = integerToword(parseInt(num / IntToWordMap[k][0])) + " ";
      }
      let b = IntToWordMap[k][1];

      let c = "";
      if (parseInt(num % IntToWordMap[k][0]) != 0) {
        c = " " + integerToword(parseInt(num % IntToWordMap[k][0]));
      }

      return a + b + c;
    }
  }
};

console.log(integerToword(num));
