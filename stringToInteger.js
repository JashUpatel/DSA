// convert string to integer
// like parseInt implementation

const str = "9007199254740991";
// const str = "9007199254740999";
// const str = "     -1234";
// const str = "     +1234";
// const str = "     ashq123445";  //o/p - 0
// const str = "     12345677abc";

// Big O - TC O(n)

const myParseInt = (str) => {
  let num = 0;
  let i = 0;
  let sign = 1;

  while (str[i] == " ") {
    i++;
  }

  if (i < str.length && (str[i] == "-" || str[i] == "+")) {
    sign = str[i] == "-" ? -1 : 1;
    i++;
  }

  // MAX_SAFE_INTEGER = 9007199254740991
  //   2^53-1
  while (i < str.length && Number.isSafeInteger(str[i] - "0")) {
    if (
      num > (Number.MAX_SAFE_INTEGER / 10).toFixed(0) ||
      (num == (Number.MAX_SAFE_INTEGER / 10).toFixed(0) && str[i] - "0" > 1)
    ) {
      return sign == -1 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    }

    num = num * 10 + (str[i] - "0");
    i++;
  }

  return num * sign;
};

console.log(myParseInt(str));

// coersion in JS
// console.log(5 - "2");
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.isInteger(1234));
// console.log(Number.isSafeInteger(1234));
// console.log(Number.isSafeInteger("1234"));
// console.log("1234" > 1234);
// console.log(Number.MAX_SAFE_INTEGER / 10);
// console.log((Number.MAX_SAFE_INTEGER / 10).toFixed(0));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 1);
// console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(Number.MAX_SAFE_INTEGER + 3);
// console.log(Number.MAX_SAFE_INTEGER + 4);
// console.log(Number.MAX_SAFE_INTEGER + 5);
// console.log(Number.MAX_SAFE_INTEGER + 6);
// console.log(Number.MAX_SAFE_INTEGER + 7);
// console.log(Number.MAX_SAFE_INTEGER + 8);
// console.log(Number.MAX_SAFE_INTEGER + 9);
// console.log(Number.MAX_SAFE_INTEGER + 10);
// console.log(Number.MAX_SAFE_INTEGER + 100);
// console.log(Number.MAX_SAFE_INTEGER);
