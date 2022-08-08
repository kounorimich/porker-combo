import {CardSuit} from './CardSuit';
import {CardNumber} from './CardNumber';

export class Card {
  private static _values = new Array<Card>();
  public num: CardNumber;
  public suit: CardSuit;
  constructor(num: CardNumber, suit: CardSuit) {
    this.num = num;
    this.suit = suit;
    Card._values.push(this);
  }
  label(): string { return this.num.label + this.suit.iconString; }

  static get values() {
    return this._values;
  }

  public static readonly sA = new Card(CardNumber.Ace, CardSuit.Spade);
  public static readonly sK = new Card(CardNumber.King, CardSuit.Spade);
  public static readonly sQ = new Card(CardNumber.Queen, CardSuit.Spade);
  public static readonly sJ = new Card(CardNumber.Jack, CardSuit.Spade);
  public static readonly sT = new Card(CardNumber.Ten, CardSuit.Spade);
  public static readonly s9 = new Card(CardNumber.Nine, CardSuit.Spade);
  public static readonly s8 = new Card(CardNumber.Eight, CardSuit.Spade);
  public static readonly s7 = new Card(CardNumber.Seven, CardSuit.Spade);
  public static readonly s6 = new Card(CardNumber.Six, CardSuit.Spade);
  public static readonly s5 = new Card(CardNumber.Five, CardSuit.Spade);
  public static readonly s4 = new Card(CardNumber.Four, CardSuit.Spade);
  public static readonly s3 = new Card(CardNumber.Three, CardSuit.Spade);
  public static readonly s2 = new Card(CardNumber.Deuce, CardSuit.Spade);

  public static readonly hA = new Card(CardNumber.Ace, CardSuit.Heart);
  public static readonly hK = new Card(CardNumber.King, CardSuit.Heart);
  public static readonly hQ = new Card(CardNumber.Queen, CardSuit.Heart);
  public static readonly hJ = new Card(CardNumber.Jack, CardSuit.Heart);
  public static readonly hT = new Card(CardNumber.Ten, CardSuit.Heart);
  public static readonly h9 = new Card(CardNumber.Nine, CardSuit.Heart);
  public static readonly h8 = new Card(CardNumber.Eight, CardSuit.Heart);
  public static readonly h7 = new Card(CardNumber.Seven, CardSuit.Heart);
  public static readonly h6 = new Card(CardNumber.Six, CardSuit.Heart);
  public static readonly h5 = new Card(CardNumber.Five, CardSuit.Heart);
  public static readonly h4 = new Card(CardNumber.Four, CardSuit.Heart);
  public static readonly h3 = new Card(CardNumber.Three, CardSuit.Heart);
  public static readonly h2 = new Card(CardNumber.Deuce, CardSuit.Heart);

  public static readonly dA = new Card(CardNumber.Ace, CardSuit.Diamond);
  public static readonly dK = new Card(CardNumber.King, CardSuit.Diamond);
  public static readonly dQ = new Card(CardNumber.Queen, CardSuit.Diamond);
  public static readonly dJ = new Card(CardNumber.Jack, CardSuit.Diamond);
  public static readonly dT = new Card(CardNumber.Ten, CardSuit.Diamond);
  public static readonly d9 = new Card(CardNumber.Nine, CardSuit.Diamond);
  public static readonly d8 = new Card(CardNumber.Eight, CardSuit.Diamond);
  public static readonly d7 = new Card(CardNumber.Seven, CardSuit.Diamond);
  public static readonly d6 = new Card(CardNumber.Six, CardSuit.Diamond);
  public static readonly d5 = new Card(CardNumber.Five, CardSuit.Diamond);
  public static readonly d4 = new Card(CardNumber.Four, CardSuit.Diamond);
  public static readonly d3 = new Card(CardNumber.Three, CardSuit.Diamond);
  public static readonly d2 = new Card(CardNumber.Deuce, CardSuit.Diamond);

  public static readonly cA = new Card(CardNumber.Ace, CardSuit.Club)
  public static readonly cK = new Card(CardNumber.King, CardSuit.Club);
  public static readonly cQ = new Card(CardNumber.Queen, CardSuit.Club);
  public static readonly cJ = new Card(CardNumber.Jack, CardSuit.Club);
  public static readonly cT = new Card(CardNumber.Ten, CardSuit.Club);
  public static readonly c9 = new Card(CardNumber.Nine, CardSuit.Club);
  public static readonly c8 = new Card(CardNumber.Eight, CardSuit.Club);
  public static readonly c7 = new Card(CardNumber.Seven, CardSuit.Club);
  public static readonly c6 = new Card(CardNumber.Six, CardSuit.Club);
  public static readonly c5 = new Card(CardNumber.Five, CardSuit.Club);
  public static readonly c4 = new Card(CardNumber.Four, CardSuit.Club);
  public static readonly c3 = new Card(CardNumber.Three, CardSuit.Club);
  public static readonly c2 = new Card(CardNumber.Deuce, CardSuit.Club);
}
