import {Combo} from './combo/Combo';
import {Hand} from './hand/Hand';
import {DirectoryEntry} from './DirectoryEntry';


export class HandRange implements DirectoryEntry{
  readonly isFolder = false;
  public name: string
  public description: string
  public hands: Set<Hand> = new Set();
  public combos: Set<Combo> = new Set();

  constructor(name: string, description: string, hands: Set<Hand>) {
    this.name = name;
    this.description = description;
    this.hands = hands;
    this.combos = hands.
  }

  static dummyRange = new HandRange(
  'UTG_6_MAX_OPEN_RAISE',
  'default',
  new Set([
            Hand.pAA,
            Hand.sAK,
            Hand.sAQ,
            Hand.sAJ,
            Hand.sAT,
            Hand.sA9,
            Hand.sA8,
            Hand.oAK,
            Hand.pKK,
            Hand.sKQ,
            Hand.sKJ,
            Hand.sKT,
            Hand.oAQ,
            Hand.oKQ,
            Hand.pQQ,
            Hand.p55,
            Hand.sQJ,
            Hand.sQT,
            Hand.oAJ,
            Hand.oKJ,
            Hand.pJJ,
            Hand.sJT,
            Hand.oAT,
            Hand.pTT,
            Hand.p99,
            Hand.p88,
            Hand.p77,
            Hand.p66,
          ])
)



  fromJson(json: string): HandRange {
    const parsed = JSON.parse(json)
    const handLabels: string[] = parsed.hands
    const hands = new Set(handLabels.map(hl => Hand.label2Hand(hl)))
    return new HandRange(parsed.name, parsed.description, hands)
  }

  static Empty = new HandRange('', '', new Set());

  addHand(hand: Hand) {
    this.hands.add(hand);
    hand.combos.forEach(c => this.combos.add(c));
  }

  removeHand(hand: Hand) {
    this.hands.delete(hand);
    hand.combos.forEach(c => this.combos.delete(c));
  }

  toggleHand(hand: Hand) {
    if (!this.hands.has(hand)) {
      this.addHand(hand);
    } else {
      this.removeHand(hand);
    }
  }

  allClear() {
    this.hands.clear();
    this.combos.clear()
  }

}
