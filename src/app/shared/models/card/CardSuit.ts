export class CardSuit {
  private static _values = new Array<CardSuit>();

  public static readonly Club = new CardSuit('c', '♣');
  public static readonly Diamond = new CardSuit('d', '♦');
  public static readonly Heart = new CardSuit('h', '♥') ;
  public static readonly Spade = new CardSuit('s', '♠') ;

  private constructor(
    public readonly label: string,
    public readonly iconString: string
  ) {
    CardSuit._values.push(this);
  }

  static get values() {
    return this._values;
  }
}



