import {Combo} from './combo/Combo';
import {Hand} from './hand/Hand';
import {Condition} from './Condition';
import {Hands} from './hand/Hands';


export class HandRange extends Set<Hand> {
  public combos: Set<Combo> = new Set();
  public count = this.combos.size;


  constructor() {
    super();
  }

  static fromCombos(combos: Set<Combo>): HandRange {
    return Object.values(Hands).filter()
  }

  narrowedCombos(condition: Condition): Set<Combo> {
    return new Set(Array.from(this.combos).filter(c => condition.condition(c)))
  }

  addHand(hand: Hand) {
    this.add(hand);
    hand.combos.forEach(c => this.combos.add(c));
  }


  removeHand(hand: Hand) {
    this.delete(hand);
    hand.combos.forEach(c => this.combos.delete(c));
  }

  toggleHand(hand: Hand) {
    if (!this.has(hand)) {
      this.addHand(hand);
    } else {
      this.removeHand(hand);
    }
  }

  // すでに存在するかどうかに関わらず登録する
  addHandAnyway(hand: Hand) {
    this.addHand(hand)
  }

  // すでに存在するかどうかに関わらず登録する
  removeHandAnyway(hand: Hand) {
    this.removeHand(hand)
  }

  allClear() {
    this.clear();
    this.combos = new Set();
  }

  hasByLabel(label: string): boolean {
    return this.has(Hand.label2Hand(label));
  }



  // numOfCombo(): number {
  //   let count = 0;
  //   this.forEach(hand => {
  //     count = count + hand.combos.length;
  //   });
  //   return count;
  // }

  toString() {
    let s = '';
    for (const h of this.values()) {
      s = s + h.label + ' ';
    }
    return s;
  }


}

