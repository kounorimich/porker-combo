export class CardNumber {
  private static _values = new Array<CardNumber>();

  public static readonly Ace = new CardNumber('A', 14);
  public static readonly King = new CardNumber('K', 13);
  public static readonly Queen = new CardNumber('Q', 12) ;
  public static readonly Jack = new CardNumber('J', 11) ;
  public static readonly Ten = new CardNumber('T', 10) ;
  public static readonly Nine = new CardNumber('9', 9) ;
  public static readonly Eight = new CardNumber('8', 8) ;
  public static readonly Seven = new CardNumber('7', 7) ;
  public static readonly Six = new CardNumber('6', 6) ;
  public static readonly Five = new CardNumber('5', 5) ;
  public static readonly Four = new CardNumber('4', 4) ;
  public static readonly Three = new CardNumber('3', 3) ;
  public static readonly Deuce = new CardNumber('2', 2) ;

  private constructor(
    public readonly label: string,
    public readonly strength: number
  ) {
    CardNumber._values.push(this);
  }

  static get values() {
    return this._values;
  }
}



