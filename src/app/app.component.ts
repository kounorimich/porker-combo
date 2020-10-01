import {Component} from '@angular/core';
import {Combo} from './shared/models/Combo';
import {Card} from './shared/models/Cards';
import {Hand} from './shared/models/Hand';
import {AllList} from './shared/models/AllHandComboList';
import {AllComboList} from './shared/models/AllComboList';
import {HandRange} from './shared/models/HandRange';
import {HandComboModel} from './shared/models/HandComboModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porker-combo';
  hand1: Combo;
  hand1NumResult: boolean;
  hand1SuitResult;
  hand2: Combo;
  hand2NumResult;
  hand2SuitResult;
  allCombo: Combo[] = AllComboList.all();
  range: HandRange;
  handpAA: Hand;


  constructor() {
    this.hand1 = new Combo(Card.c2, Card.h4);
    this.hand1NumResult = this.hand1.hasNum(2);
    this.hand1SuitResult = this.hand1.hasSuit('c');

    this.hand2 = new Combo(Card.hJ, Card.d4);
    this.hand2NumResult = this.hand2.hasNum(13);
    this.hand2SuitResult = this.hand2.hasSuit('s');
    this.range = new HandRange();
  }

  toggleHand(label: string): void {
    const hand: HandComboModel = AllList.AllHands.find((h) => h.label === label);
    this.range.toggleHand(hand);
  }
}
