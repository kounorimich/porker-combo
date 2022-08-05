import {AfterViewInit, Component} from '@angular/core';
import {Combo} from './shared/models/combo/Combo';
import {Combos} from './shared/models/combo/Combos';
import {HandRange} from './shared/models/HandRange';
import {Hand} from './shared/models/hand/Hand';
import {AllNums} from './shared/models/Num';
import {AllSuits, Suit} from './shared/models/Suit';
import {Condition} from './shared/models/Condition';
import {ComboCondition} from './shared/models/ComboCondition';
import {Card} from './shared/models/card/Card';
import {Hands} from './shared/models/hand/Hands';
import * as _ from 'underscore'

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'porker-combo';
  allCombo: Set<Combo> = new Set(Combos.all());
  range: HandRange;
  AllNums = AllNums;
  AllSuits = AllSuits;
  conditions: Condition[];
  narrowing_1: Condition = ComboCondition.createHaveNumCondition(14);
  narrowing_1_selectedNum: number ;
  narrowing_1_selectedSuit: Suit;
  opt1_selected:number;
  narrowedCombos: Set<Combo> = new Set();
  blocker: Set<Card> = new Set();
  allComboMinusBlocker: Set<Combo>;

  selectingMode:number; // クリックされてないとき：０、クリックされていて選択のとき：１、クリックされていて解除のとき：２ （超イマイチだけど、いったん）



  constructor() {
    this.range = new HandRange();
    this.updatePossibleCombos();
    this.updateNarrowedCombos();
    this.selectingMode = 0
    const blockerCondition = new Condition(combo => !combo.cards.find(c => this.blocker.has(c)))
    this.conditions = [blockerCondition]
    this.narrowedCombos = new Set([...this.allCombo].filter(combo => this.conditions.every(condition => condition.condition(combo))))

  }

  blockerCondition(): Condition


  ngAfterViewInit(): void {
    let addToRange =  s => this.addToRange(s)
    let removeFromRange =  s => this.removeFromRange(s)
    let setSelectingMode = n => this.selectingMode = n
    let getSelectingMode = () => {return this.selectingMode}

    $(".hand-option").on('mousedown', function(){
      if ($(this).attr("class").includes("in-range")) {
        console.log('mousedown includes in-range')
        removeFromRange($(this).attr("id"));
        setSelectingMode(2);
      } else {
        console.log('mousedown not includes in-range')
        addToRange($(this).attr("id"));
        setSelectingMode(1);
      }
    })
    $(".hand-option").on('mouseenter', function(){
      if (getSelectingMode() === 1) {
        console.log('mouseenter mode 1')
        addToRange($(this).attr("id"))
      } else if (getSelectingMode() === 2) {
        console.log('mouseenter mode 2')
        removeFromRange($(this).attr("id"))
      }
    })
    $(".row").on("mouseup", function() {
      setSelectingMode(0);
    })
  }


  updatePossibleCombos() {
    if (this.blocker.size === 0) {
      this.allComboMinusBlocker = this.allCombo;
    } else {
      console.log('hoge');
      this.allComboMinusBlocker = this.block(new Set(this.allCombo));
    }
  }

  toggleBlocker(num: number, suit: string) {
    const card = Card.cardFromNumAndSuit(num, suit);
    if (this.blocker.has(card)) {
      this.blocker.delete(card);
    } else {
      this.blocker.add(card);
    }
    this.updateNarrowedCombos();
    this.updatePossibleCombos();
  }

  cardFromNumAndSuit(num: number, suit: string) {
    return Card.cardFromNumAndSuit(num, suit);
  }

  label2hand(label: string): Hand {
    return Hand.label2Hand(label);
  }

  inCondition(hand: Hand): boolean {
    return this.range.has(hand) &&
      hand.countMatchedComboCount(this.narrowing_1) > 0;

  }

  updateNarrowing_1_byNum(narrowingType: number, value: string): void {
    if (narrowingType === 0) { // have
      this.narrowing_1 = ComboCondition.createHaveNumCondition(parseInt(value));
      this.narrowing_1_selectedNum = parseInt(value);
      // not haveは不要な機能な気がするのでやめた
    // } else if (narrowingType == 1) { // not have
    //   this.narrowing_1 = ComboCondition.createNotHaveNumCondition(parseInt(value));
    //   this.narrowing_1_selectedNum = parseInt(value);
    } else if (narrowingType == 2) { // suited with

    } else if (narrowingType == 3) { // pair of

    }
    this.updateNarrowedCombos();
  }

  block(combos: Set<Combo>): Set<Combo> {
    if (this.blocker.size === 0) {
      return combos;
    } else {
      return
    }
  }

  updateNarrowedCombos() {
    this.narrowedCombos = this.block(new Set(Array.from(this.range.combos).filter(c => this.narrowing_1.condition(c))));
  }


  // updateNarrowedRange() {
  //   this.narrowing_1 = c;
  //   this.narrowedCombos = this.range.narrowedCombos(this.narrowing_1);
  // }

  toggleHand(label: string): void {
    this.range.toggleHand(Hand.label2Hand(label));
    this.updateNarrowedCombos();
  }

  addToRange(label: string): void {
    this.range.addHandAnyway(Hand.label2Hand(label));
    this.updateNarrowedCombos();
  }

  removeFromRange(label: string): void {
    this.range.removeHandAnyway(Hand.label2Hand(label));
    this.updateNarrowedCombos();
  }

  calculatePercentage(): string {
    return (this.range.count / 1326 * 100).toFixed(2);
  }

  All_Row: Hand[][] = _.chunk(Object.values(Hands), 13);



  // narrow(narrowingIdx: number, num: Num, suit)

  // createNumOptions(): HTMLOptionElement[] {
  //   let options = this.AllNums.map(num => {
  //     let option = document.createElement('option');
  //     option.innerHTML = num.label;
  //     option.value = num.value.toString();
  //     return option;
  //   });
  //   let unSelect = document.createElement("option")
  //   unSelect.innerHTML = "Any";
  //   unSelect.value = "Any";
  //   options.push(unSelect);
  //   return options
  // }
  //
  // createSuitOptions(): HTMLOptionElement[] {
  //   let options = this.AllSuits.map(num => {
  //     let option = document.createElement('option');
  //     option.innerHTML = num.label;
  //     option.value = num.value;
  //     return option;
  //   });
  //   let unSelect = document.createElement("option")
  //   unSelect.innerHTML = "Any";
  //   unSelect.value = "Any";
  //   options.push(unSelect);
  //   return options
  // }

}


