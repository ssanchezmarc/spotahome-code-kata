import { symbolFactory } from './romanSymbols';

// Implements Romanizable interface
export class Decimal {
  constructor(number, base = 1) {
    this.value = number;
    this.base = base;
  }

  getUnits() {
    return new Decimal(Math.floor((this.value) % 10));
  }

  getTens() {
    return new Decimal(Math.floor((this.value / 10) % 10) * 10, 10);
  }

  getHundred() {
    return new Decimal(Math.floor((this.value / 100) % 10) * 100, 100);
  }

  getThousands() {
    return new Decimal(Math.floor((this.value / 1000) % 10) * 1000, 1000);
  }

  isZero() {
    return this.value === 0;
  }

  getNumberOfBases() {
    return this.value / this.base;
  }

  // Romanizable
  isBeforeFirstRomanTransition() {
    return (4 * this.base) > this.value;
  }

  isFirstRomanTransition() {
    return (4 * this.base) === this.value;
  }

  isBetweenTransactions() {
    return (5 * this.base) === this.value;
  }

  isBeforeSecondRomanTransition() {
    return (9 * this.base) > this.value;
  }

  isSecondRomanTransition() {
    return (9 * this.base) === this.value;
  }

  getBaseRomanSymbol() {
    if(this.value === 0) {
      return symbolFactory.fromDecimal(0);
    }

    return symbolFactory.fromDecimal(this.base);
  }
}
