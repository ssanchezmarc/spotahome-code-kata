export const RomanTranslator =  {
  fromNumber(number) {
    this.number = number;

    return this;
  },

  toRoman() {
    return "".concat(
      this._translate(this.number.getThousands()),
      this._translate(this.number.getHundred()),
      this._translate(this.number.getTens()),
      this._translate(this.number.getUnits())
    );
  },

  _translate(number) {
    const symbol = number.getBaseRomanSymbol();

    if (number.isZero()) {
      return symbol.toString();
    }

    if (number.isBeforeFirstRomanTransition()) {
      return symbol.toString().repeat(number.getNumberOfBases());
    }

    if (number.isFirstRomanTransition()) {
      return `${symbol.toString()}${symbol.nextSymbol().toString()}`;
    }

    if (number.isBetweenTransactions()) {
      return symbol.nextSymbol().toString();
    }

    if (number.isBeforeSecondRomanTransition()) {
      return `${symbol.nextSymbol().toString()}${symbol.toString().repeat(number.getNumberOfBases() - 5)}`;
    }

    if (number.isSecondRomanTransition()) {
      return `${symbol.toString()}${symbol.nextSymbol().nextSymbol().toString()}`;
    }
  }
};
