const toRoman = n => {
  // Basic case
  if (n === 0) {
    return '';
  }

  // Unit
  if (n >= 1 && n <= 3) {
    return `I${toRoman(n - 1)}`;
  }

  if (4 === n) {
    return 'IV';
  }

  if (n >= 5 && n < 9) {
    return `V${toRoman(n - 5)}`;
  }

  if (9 === n) {
    return 'IX';
  }

  // tens
  if (n >= 10 && n <= 39) {
    return `X${toRoman(n - 10)}`;
  }

  if (n >= 40 && n <= 49) {
    return `XL${toRoman(n - 40)}`;
  }

  if (n >= 50 && n <= 89) {
    return `L${toRoman(n - 50)}`;
  }

  if (n >= 90 && n <= 99) {
    return `XC${toRoman(n - 90)}`;
  }


  // hundred
  if (n >= 100 && n < 399) {
    return `C${toRoman(n - 100)}`;
  }

  if (n >= 400 && n <= 499) {
    return `CD${toRoman(n - 400)}`;
  }

  if (n >= 500 && n <= 899) {
    return `D${toRoman(n - 500)}`;
  }

  if (n >= 900 && n <= 999) {
    return `CM${toRoman(n - 900)}`;
  }

  // thousands
  if (n >= 1000 && n < 3999) {
    return `M${toRoman(n - 1000)}`;
  }
};

export default toRoman;
