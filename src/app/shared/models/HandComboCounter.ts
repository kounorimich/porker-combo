import {HandRange} from './HandRange';
import {Condition} from './Condition';
import {Hand} from './hand/Hand';
import {Card} from './card/Card';
import {Combo} from './combo/Combo';

// 「コンボ数を数える」とは、「あるハンドレンジについて、ブロッカーと条件を考慮してあり得るカードの組み合わせを数えること」

export class HandComboCounter {
  handRange: HandRange;
  blocker: Set<Card> = new Set();
  includesAnyOf: Set<Card> = new Set();

  constructor(handRange: HandRange) {
    this.handRange = handRange;
  }

  addHandToRange(hand: Hand) {
    this.handRange.hands.add(hand);
  }

  removeHandFromRange(hand: Hand) {
    this.handRange.hands.delete(hand);
  }

  isInRange(hand: Hand): boolean {
    return this.handRange.hands.has(hand);
  }

  includesAnyOfCondition(): Condition {
    if (this.includesAnyOf.size === 0) {
      return new Condition(c => true);
    } else {
      new Condition(c => c.hasAny(this.includesAnyOf));
    }
  }

  // ハンドレンジについて、ブロッカーと条件を考慮してあり得るカードの組み合わせを数えること」。なので、ハンドレンジ外のハンドについて呼び出されると、空を返す。
  listComboOf(hand: Hand): Set<Combo> {
    if (this.isInRange(hand)) {
      return new Set();
    } else {
      return new Set([...hand.allCombos].filter(combo =>
        combo.notHasAny(this.blocker) && this.includesAnyOfCondition().check(combo)
      ));
    }
  }
}
