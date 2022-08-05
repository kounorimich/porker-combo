export class Num {
  public value: number;
  public label: string;

  constructor(value: number, label: string) {
    this.value = value;
    this.label = label;
  }
}

export const Duce = new Num(2, "2");
export const Three = new Num(3, "3");
export const Four = new Num(4, "4");
export const Five = new Num(5, "5");
export const Six = new Num(6, "6");
export const Seven = new Num(7, "7");
export const Eight = new Num(8, "8");
export const Nine = new Num(9, "9");
export const Ten = new Num(10, "T");
export const Jack = new Num(11, "J");
export const Queen = new Num(12, "Q");
export const King = new Num(13, "K");
export const Ace = new Num(14, "A");

export const AllNums = [Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Six, Five, Four, Three, Duce];
