export class Suit {
  public value: string;
  public label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}

export const Spade = new Suit("s", "♠");
export const Heart = new Suit("h", "♥");
export const Club = new Suit("c", "♣");
export const Diamond = new Suit("d", "♦");

export const AllSuits = [Spade, Heart, Club, Diamond];
