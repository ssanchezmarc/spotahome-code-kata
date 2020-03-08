const conversions = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

const applyTransformation = (number, base) => {
  if ((4 * base) > number) {
    return `${conversions[base]}${toRoman(number - base)}`;
  }

  if ((5 * base) > number) {
    return `${conversions[base]}${conversions[(5 * base)]}${toRoman(number - (4 * base))}`;
  }

  if ((9 * base) > number) {
    return `${conversions[(5 * base)]}${toRoman(number - (5 * base))}`;
  }

  if ((10 * base) > number) {
    return `${conversions[base]}${conversions[(10 * base)]}${toRoman(number - (9 * base))}`;
  }
};


const toRoman = n => {
  // Break case
  if (0 === n) {
    return '';
  }

  // Units from 1 to 9
  if (10 > n) {
    return applyTransformation(n, 1);
  }

  // Tens from 10 to 99
  if (100 > n) {
    return applyTransformation(n, 10);
  }

  // Hundred from 100 to 999
  if (1000 > n) {
    return applyTransformation(n, 100);
  }

  // Thousands from 1000 to 3999
  if (4000 > n) {
    return applyTransformation(n, 1000);
  }
};

export default toRoman;
