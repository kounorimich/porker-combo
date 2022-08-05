import {CardSuit} from './CardSuit';
import {Cards} from './Cards';

export class Card {
  public num: number;
  public suit: CardSuit;
  constructor(num: number, suit: CardSuit) {
    this.num = num;
    this.suit = suit;
  }
  label(): string { return this.num + this.suit; }

  static cardFromNumAndSuit(num: number, suit: string): Card {
    return Object.values(Cards).find(c => c.num === num && c.suit === suit)
  }
}
