import { RomanTranslator } from './RomanTranslator';
import { Decimal } from './Decimal';

const toRoman = n => {
  const decimalNumber = new Decimal(n);

  return RomanTranslator.fromNumber(decimalNumber).toRoman();
};

export default toRoman;
