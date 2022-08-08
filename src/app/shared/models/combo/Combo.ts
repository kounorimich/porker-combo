import {Card} from '../card/Card';
import {CardNumber} from '../card/CardNumber';
import {CardSuit} from '../card/CardSuit';

export class Combo {
  card1: Card
  card2: Card
  public constructor(card1: Card, card2: Card) {
    this.card1 = card1;
    this.card2 = card2;
  }

  label(): string {
    return (this.card1.label() + ' ' + this.card2.label());
  }

  // hasCards(cards: Set<Card>): boolean {
  //
  //   return this.card1 === card || this.card2 === card;
  // }

  notHasAny(cards: Set<Card>): boolean {
    for (let c of cards.values()) {
      if ((this.card1 === c) || this.card2 === c) {
        return false
      }
    }
    return true;
  }

  hasAny(cards: Set<Card>): boolean {
    return !this.notHasAny(cards)
  }

  hasNum(n: CardNumber): boolean {
    return this.card1.num === n || this.card2.num === n;
  }
  hasSuit(suit: CardSuit){
    return this.card1.suit === suit || this.card2.suit === suit;
  }
  isSuitedOf(suit: CardSuit) {
    return this.card1.suit === suit && this.card2.suit === suit;
  }
  isSuited() {
    return this.card1.suit === this.card2.suit
  }
  isPocketPair() {
    return this.card1.num === this.card2.num;
  }

  isPocketPairOf(number: CardNumber) {
    return this.card1.num === number && this.card2.num === number;
  }
}
