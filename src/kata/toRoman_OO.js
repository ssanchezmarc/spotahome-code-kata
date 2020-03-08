const Zero = {
  decimalValue: 0,
  symbol: ''
};

const I = {
  decimalValue: 1,
  symbol: 'I'
};

const V = {
  decimalValue: 5,
  symbol: 'V'
};

const X = {
  decimalValue: 10,
  symbol: 'X'
};

const L = {
  decimalValue: 50,
  symbol: 'L'
};

const C = {
  decimalValue: 100,
  symbol: 'C'
};

const D = {
  decimalValue: 500,
  symbol: 'D'
};

const M = {
  decimalValue: 1000,
  symbol: 'M'
};

const symbolFactory = (decimalValue) => {
  const conversions = {
    [Zero.decimalValue]: Zero,
    [I.decimalValue]: I,
    [V.decimalValue]: V,
    [X.decimalValue]: X,
    [L.decimalValue]: L,
    [C.decimalValue]: C,
    [D.decimalValue]: D,
    [M.decimalValue]: M,
  };

  return conversions[decimalValue].symbol;
}

class Decimal {
  constructor(number, base = 1) {
    this.value = number;
    this.base = base;
  }

  getUnits() {
    return new Decimal(Math.floor((this.value / 1) % 10));
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

  subtract(number) {
    return new Decimal(this.value - number, this.base);
  }

  isBeforeFirstRomanTransition(base) {
    return (4 * this.base) > this.value;
  }

  isFirstRomanTransition(base) {
    return (4 * this.base) === this.value;
  }

  isBeforeecondRomanTransition(base) {
    return (9 * this.base) > this.value;
  }

  isSecondRomanTransition(base) {
    return (9 * this.base) === this.value;
  }
}

const RomanTranslator = {
  fromDecimal(decimalNumber) {
    this.decimal = decimalNumber;

    return this;
  },

  toRoman() {
    return "".concat(
      this._translate(this.decimal.getThousands(), 1000),
      this._translate(this.decimal.getHundred(), 100),
      this._translate(this.decimal.getTens(), 10),
      this._translate(this.decimal.getUnits(), 1)
    );
  },

  _translate(decimal, base) {
    if(decimal.isZero()) {
      return symbolFactory(decimal.value);
    }

    if (decimal.isBeforeFirstRomanTransition()) {
      return `${symbolFactory(base)}${this._translate(decimal.subtract(base), base)}`;
    }

    if (decimal.isFirstRomanTransition()) {
      return `${symbolFactory(base)}${symbolFactory(5 * base)}${this._translate(decimal.subtract(4 * base), base)}`;
    }

    if (decimal.isBeforeecondRomanTransition()) {
      return `${symbolFactory(5 * base)}${this._translate(decimal.subtract(5 * base), base)}`;
    }

    if (decimal.isSecondRomanTransition()) {
      return `${symbolFactory(base)}${symbolFactory(10 * base)}${this._translate(decimal.subtract(9 * base), base)}`;
    }
  }
};

const toRoman = n => {
  const decimalNumber = new Decimal(n);

  return RomanTranslator.fromDecimal(decimalNumber).toRoman();
};

export default toRoman;
