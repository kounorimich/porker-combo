import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as _ from 'underscore';
import {DirectoryEntry} from '../shared/models/DirectoryEntry';
import {CardNumber} from '../shared/models/card/CardNumber';
import {Hand} from '../shared/models/hand/Hand';
import {Card} from '../shared/models/card/Card';
import {HandRange} from '../shared/models/HandRange';
import {Combo} from '../shared/models/combo/Combo';
import {DirectoryEntryService} from '../service/directory-entry.service';
import {Condition} from '../shared/models/Condition';

declare let $: any;

@Component({
  selector: 'app-combo-counter',
  templateUrl: './combo-counter.component.html',
  styleUrls: ['./combo-counter.component.css']
})

export class ComboCounterComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() range: HandRange = HandRange.Empty;
  entries: DirectoryEntry[] = [];
  AllNumber = CardNumber.values;
  All_Row: Hand[][] = _.chunk(Hand.values, 13);
  title = 'porker-combo';
  AllCardsGroupedBySuit: Card[][] = _.chunk(Card.values, 13)
  blockers: Set<Card> = new Set();
  includesAnyOf: Set<Card> = new Set();
  allCombo = new Set(Hand.values.map(x => Array.from(x.combos)).flat().filter(combo => combo.notHasAny(this.blockers)));
  // rangeは直接テンプレートから触らせない（ブロッカーを反映したものを渡すため）
  narrowedCombos = new Set<Combo>();

  selectingMode = 0; // クリックされてないとき：０、クリックされていて選択のとき：１、クリックされていて解除のとき：２ （超イマイチだけど、いったん）

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.update()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hgoehgoe')
    this.update()
    this.cdr.detectChanges()

  }



  toggleIncludeAnyOfByNumber(cn: CardNumber) {
    const cards = this.listCardByNumber(cn)
    if (this.targetHasAllCards(this.includesAnyOf, cards)) {
      cards.forEach(c => this.includesAnyOf.delete(c))
    } else {
      cards.forEach(c => this.includesAnyOf.add(c))
    }
    this.update()
  }

  // ある数字について、すべてスートがincludesAnyOfに含まれているかどうか
  targetHasAllCardsOfNumber(target: Set<Card>, cn: CardNumber): boolean {
    const cards = this.listCardByNumber(cn)
    if (cards.length === 0) {
      return false;
    } else {
      return cards.every(cardOfNumber => target.has(cardOfNumber))
    }
  }

  targetHasAllCards(target: Set<Card>, cards: Card[]): boolean {
    if (cards.length === 0) {
      return false;
    } else {
      return cards.every(cardOfNumber => target.has(cardOfNumber))
    }
  }

  listCardByNumber(cn: CardNumber): Card[] {
    return Card.values.filter(c => (!this.blockers.has(c)) && c.num === cn)
  }

  clearBlocker() {
    this.blockers.clear();
    this.update()
  }

  clearIncludesAnyOf() {
    this.includesAnyOf.clear();
    this.update()
  }

  toggleIncludeAnyOf(card: Card) {
    if (this.includesAnyOf.has(card)) {
      this.includesAnyOf.delete(card)
    } else {
      this.includesAnyOf.add(card)
    }
    this.update()
  }

  update() {
    this.includesAnyOf = new Set([...this.includesAnyOf].filter(h => !this.blockers.has(h)))
    const includesAnyOfCondition = this.includesAnyOf.size === 0 ? Condition.Empty : new Condition(combo => combo.hasAny(this.includesAnyOf))
    const suitedCondition = Condition.Empty;
    const conditions = [includesAnyOfCondition, suitedCondition]
    this.narrowedCombos = new Set([...this.range.combos].filter(
      combo => conditions.every(condition => condition.check(combo)) &&
        combo.notHasAny(this.blockers)
    ))
    this.allCombo = new Set(Hand.values.map(x => Array.from(x.combos)).flat().filter(combo => combo.notHasAny(this.blockers)));
  }

  clearRange() {
    this.range.allClear()
    this.update()
  }

  // blockerを反映したもの
  get rangeComboSize() {
    return new Set([...this.range.combos].filter(combo => combo.notHasAny(this.blockers))).size;
  }

  rangeHas(hand: Hand) {
    return this.range.hands.has(hand);
  }

  ngAfterViewInit(): void {
    // thisがかぶるので別で定義
    let addToRange =  s => this.addToRange(s)
    let removeFromRange =  s => this.removeFromRange(s)
    let setSelectingMode = n => this.selectingMode = n
    let getSelectingMode = () => {return this.selectingMode}

    $(".hand-option").on('mousedown', function(){
      if ($(this).attr("class").includes("in-range")) {
        removeFromRange($(this).attr("id"));
        setSelectingMode(2);
      } else {
        addToRange($(this).attr("id"));
        setSelectingMode(1);
      }
    })
    $(".hand-option").on('mouseenter', function(){
      if (getSelectingMode() === 1) {
        addToRange($(this).attr("id"))
      } else if (getSelectingMode() === 2) {
        removeFromRange($(this).attr("id"))
      }
    })
    $(".row").on("mouseup", function() {
      setSelectingMode(0);
    })
  }

  toggleBlocker(card: Card) {
    if (this.blockers.has(card)) {
      this.blockers.delete(card);
    } else {
      this.blockers.add(card);
    }
    this.update()
  }

  countNarrowedCombosOfHand(hand: Hand): number {
    // narrowedCombosとそのハンドのcomboの積をカウント
    const intersection = new Set([...hand.combos].filter(c => this.narrowedCombos.has(c)))
    return intersection.size;
  }

  toggleHand(hand: Hand): void {
    this.range.toggleHand(hand);
    this.update()
  }

  addToRange(label: string): void {
    console.log('addtorange')
    this.range.addHand(Hand.label2Hand(label));
    this.update()
  }

  removeFromRange(label: string): void {
    console.log('remove ')
    this.range.removeHand(Hand.label2Hand(label));
    this.update()
  }

}



