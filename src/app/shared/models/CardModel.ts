export class CardModel {
  public num: number;
  public suit: string;
  constructor(num: number, suit: string) {
    this.num = num;
    this.suit = suit;
  }
  label(): string { return this.num + this.suit; }
}
