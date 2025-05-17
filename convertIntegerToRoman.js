// convert integer value to roman numerals
// symbols:
// I - 1, V - 5, X - 10, L - 50, C - 100, D - 500, M - 1000

const num = 58;
//  o/p - 'LVIII'

// const num = 1994;
// o/p - "MCMXCIV"

const convertIntToRoman = (num) => {
  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let ans = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= values[i]) {
      ans = ans + romanSymbols[i];
      num = num - values[i];
    }
  }

  return ans;
};

const convertIntToRomanWithMap = (num) => {
  const romanSymbolsMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let ans = "";

  for (let key in romanSymbolsMap) {
    while (num >= romanSymbolsMap[key]) {
      ans = ans + key;
      num = num - romanSymbolsMap[key];
    }
  }

  return ans;
};

console.log(convertIntToRoman(num));
console.log(convertIntToRomanWithMap(num));
