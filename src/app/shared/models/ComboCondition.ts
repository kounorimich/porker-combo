import {Num} from './Num';
import {Suit} from './Suit';
import {Condition} from './Condition';


export class ComboCondition {
  static createHaveNumCondition(num: number) {
    return new Condition(combo => combo.hasNum(num));
  }

  // static createNotHaveNumCondition(num: number) {
  //   return new Condition(combo => !combo.hasNum(num));
  // }

  static createHaveSuitCondition(suit: Suit) {
    return new Condition(combo => combo.hasSuit(suit.value));
  }

  static createHaveParticularCardCondition(num: Num, suit: Suit) {
    return new Condition(combo => combo.hasNum(num.value) && combo.hasSuit(suit.value));
  }
}
