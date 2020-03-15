import { None } from './symbols/None';
import { I } from './symbols/I';
import { V } from './symbols/V';
import { X } from './symbols/X';
import { L } from './symbols/L';
import { C } from './symbols/C';
import { D } from './symbols/D';
import { M } from './symbols/M';


export const symbolFactory = {
  fromDecimal(decimal) {
    const conversions = {
      [None.decimalValue]: None,
      [I.decimalValue]: I,
      [V.decimalValue]: V,
      [X.decimalValue]: X,
      [L.decimalValue]: L,
      [C.decimalValue]: C,
      [D.decimalValue]: D,
      [M.decimalValue]: M,
    };

    return conversions[decimal];
  }
}
