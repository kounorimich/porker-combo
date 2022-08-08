import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as _ from 'underscore';
import {CardNumber} from '../shared/models/card/CardNumber';
import {Hand} from '../shared/models/hand/Hand';
import {Card} from '../shared/models/card/Card';
import {HandRange} from '../shared/models/HandRange';
import {Combo} from '../shared/models/combo/Combo';
import {Condition} from '../shared/models/Condition';

declare let $: any;

@Component({
  selector: 'app-combo-counter',
  templateUrl: './combo-counter.component.html',
  styleUrls: ['./combo-counter.component.css']
})

export class ComboCounterComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() range: HandRange = HandRange.Empty;
  AllNumber = CardNumber.values;
  All_Row: Hand[][] = _.chunk(Hand.values, 13);
  title = 'porker-combo';
  AllCardsGroupedBySuit: Card[][] = _.chunk(Card.values, 13);
  blockers: Set<Card> = new Set();
  includesAnyOf: Set<Card> = new Set();
  allCombo = new Set(Hand.values.map(x => Array.from(x.allCombos)).flat().filter(combo => combo.notHasAny(this.blockers)));
  // rangeは直接テンプレートから触らせない（ブロッカーを反映したものを渡すため）

  selectingMode = 0; // クリックされてないとき：０、クリックされていて選択のとき：１、クリックされていて解除のとき：２ （超イマイチだけど、いったん）

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hgoehgoe');
    this.cdr.detectChanges();

  }


  // （その数字のカード4枚 - ブロッカー）の全部が既に選択されていたら、全部消す。それ以外は全部オンにする。
  toggleIncludeAnyOfByNumber(cn: CardNumber) {

    // その数字のカードのうち、ブロッカーがもってないカードを全部足す

    const cardsOfNumMinusBlocker = this.cardsOfNumMinusBlocker(cn);
    if (this.targetHasAllCards(this.includesAnyOf, cardsOfNumMinusBlocker)) {
      cardsOfNumMinusBlocker.forEach(c => this.includesAnyOf.delete(c));
    } else {
      cardsOfNumMinusBlocker.forEach(c => this.includesAnyOf.add(c));
    }
  }

  cardsOfNumMinusBlocker(cn: CardNumber) {
    const cardsOfNum = this.listCardByNumber(cn); // 絶対4枚
    return new Set([...cardsOfNum].filter(c => !this.blockers.has(c)));
  }

  blockerHasAllCardOfNumber(cn: CardNumber): boolean {
    return Array.from(this.blockers).filter(c => c.num === cn).length === 4;
  }

  // ある数字について、ブロッカー除いた全てのカードが選択されているか
  includesAnyOfHasAllPossibleCard(cn: CardNumber): boolean {
    if (this.cardsOfNumMinusBlocker(cn).size === 0) {
      return false;
    } else {
      return this.targetHasAllCards(this.includesAnyOf, this.cardsOfNumMinusBlocker(cn));
    }

  }


  targetHasAllCards(target: Set<Card>, cards: Set<Card>): boolean {
    return Array.from(cards).every(cardOfNumber => target.has(cardOfNumber));

  }

  listCardByNumber(cn: CardNumber): Card[] {
    return Card.values.filter(c => c.num === cn);
  }

  clearBlocker() {
    this.blockers.clear();
  }

  clearIncludesAnyOf() {
    this.includesAnyOf.clear();
  }

  toggleIncludeAnyOf(card: Card) {
    if (this.includesAnyOf.has(card)) {
      this.includesAnyOf.delete(card);
    } else {
      this.includesAnyOf.add(card);
    }
  }

  clearRange() {
    this.range.allClear();
  }

  // blockerを反映したもの
  get rangeComboSize() {
    if (this.range.hands.size === 0) {
      return 0;
    } else {
      const combosCounts = Array.from(this.range.hands).map(h => Array.from(h.allCombos).filter(c => c.notHasAny(this.blockers)).length);
      return combosCounts.reduce((acc, val) => acc + val);
    }
  }

  get matchedComboSize() {
    if (this.range.hands.size === 0) {
      return 0;
    } else {
      const combosCounts = Array.from(this.range.hands).map(h => Array.from(h.allCombos).filter(c =>
        c.notHasAny(this.blockers) && c.hasAny(this.includesAnyOf)
      ).length);
      return combosCounts.reduce((acc, val) => acc + val);
    }
  }

  get allComboMinusBlocker() {
    return 1326 - this.blockers.size;
  }

  ngAfterViewInit(): void {
    // thisがかぶるので別で定義
    let addToRange = s => this.addToRange(s);
    let removeFromRange = s => this.removeFromRange(s);
    let setSelectingMode = n => this.selectingMode = n;
    let getSelectingMode = () => {
      return this.selectingMode;
    };

    $('.hand-option').on('mousedown', function() {
      if ($(this).attr('class').includes('in-range')) {
        removeFromRange($(this).attr('id'));
        setSelectingMode(2);
      } else {
        addToRange($(this).attr('id'));
        setSelectingMode(1);
      }
    });
    $('.hand-option').on('mouseenter', function() {
      if (getSelectingMode() === 1) {
        addToRange($(this).attr('id'));
      } else if (getSelectingMode() === 2) {
        removeFromRange($(this).attr('id'));
      }
    });
    $('.row').on('mouseup', function() {
      setSelectingMode(0);
    });
  }

  toggleBlocker(card: Card) {
    if (this.blockers.has(card)) {
      this.blockers.delete(card);
    } else {
      this.blockers.add(card);
    }
    this.includesAnyOf = new Set([...this.includesAnyOf].filter(c => !this.blockers.has(c)))
  }

  isInRange(hand: Hand): boolean {
    return this.range.hands.has(hand);
  }

  includesAnyOfCondition(): Condition {
    if (this.includesAnyOf.size === 0) {
      return new Condition(c => true);
    } else {
      return new Condition(c => c.hasAny(this.includesAnyOf));
    }
  }


  listComboOf(hand: Hand): Set<Combo> {
    if (!this.isInRange(hand)) {
      return new Set();
    } else {
      return new Set([...hand.allCombos].filter(combo =>
        combo.notHasAny(this.blockers) && this.includesAnyOfCondition().check(combo)
      ));
    }
  }

  addToRange(label: string): void {
    console.log('addtorange');
    this.range.addHand(Hand.label2Hand(label));
  }

  removeFromRange(label: string): void {
    console.log('remove ');
    this.range.removeHand(Hand.label2Hand(label));
  }

}



