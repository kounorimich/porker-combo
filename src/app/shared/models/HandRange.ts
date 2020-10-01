import {Combo} from './Combo';
import {Hand} from './Hand';
import {HandComboModel} from './HandComboModel';
import {AllList} from './AllHandComboList';

export class HandRange extends Set<HandComboModel> {
  addHand(hand: HandComboModel) {
    this.add(hand);
  }

  removeHand(hand: HandComboModel) {
    this.delete(hand);
  }

  toggleHand(hand: HandComboModel) {
    if (!this.has(hand)) {
      this.addHand(hand);
    } else {
      this.removeHand(hand);
    }
  }

  hasForLabel(label: string): boolean {
    const hand: HandComboModel = AllList.AllHands.find((h) => h.label === label);
    return this.has(hand);
  }

  toString() {
    let s = '';
    for (const h of this.values()) {
      s = s + h.label + ' ';
    }
    return s;
  }
}
