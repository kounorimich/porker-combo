import {Card} from '../card/Card';

export class Combo {
  cards: Card[];
  constructor(card1: Card, card2: Card) {
    this.cards = [card1, card2];
  }

  label(): string {
    return (this.cards[0].label() + ' ' + this.cards[1].label());
  }

  hasNum(n: number): boolean {
    return this.cards[0].num === n || this.cards[1].num === n;
  }
  hasSuit(suit: string){
    return this.cards[0].suit === suit || this.cards[1].suit === suit;
  }

  isSuited() {
    return this.cards[0].suit === this.cards[1].suit;
  }

  is_c_Suited() {
    return this.cards[0].suit === 'c' || this.cards[1].suit === 'c';
  }

  is_h_Suited() {
    return this.cards[0].suit === 'h' || this.cards[1].suit === 'h';
  }
  is_d_Suited() {
    return this.cards[0].suit === 'd' || this.cards[1].suit === 'd';
  }

  is_s_Suited() {
    return this.cards[0].suit === 's' || this.cards[1].suit === 's';
  }

  isPokectPair() {
    return this.cards[0].num === this.cards[1].num;
  }
}
