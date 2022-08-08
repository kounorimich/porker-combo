import {Combo} from '../combo/Combo';
import {Condition} from '../Condition';
import {Card} from '../card/Card';

// ハンドとそれに対応するコンボの関係は不変なので、読み取り専用。

export class Hand {
  private static _values = new Array<Hand>()

  readonly label: string;
  readonly allCombos: Set<Combo>;
  private constructor(label: string, ...hands: Combo[]) {
    this.label = label;
    this.allCombos = new Set(hands);
    Hand._values.push(this)
  }
  isSuited(): boolean {
    return this.label.endsWith("s")
  }
  isPocketPair(): boolean {
    return this.label.endsWith("p")
  }
  // 「A♣をもつ」という条件 → AKsは適合するんだけど、全部ではなく25%。のように、UIの表でも、あり/なしだけじゃなく、pioSolverみたいに、コンボ数を反映させたいのでbooleanではなくカウントする
  countMatchedComboCount(condition: Condition): number {
    return Array.from(this.allCombos).filter(combo => condition.check(combo)).length
  }

  static label2Hand(label: string): Hand {
    return this._values.find((h) => h.label === label);
  }

  static get values() {
    return this._values
  }

  public static readonly pAA = new Hand(
      'AAp',
      new Combo(Card.sA, Card.cA),
      new Combo(Card.sA, Card.hA),
      new Combo(Card.sA, Card.dA),
      new Combo(Card.cA, Card.hA),
      new Combo(Card.cA, Card.dA),
      new Combo(Card.hA, Card.dA)
    )

  public static readonly sAK = new Hand(
      'AKs',
      new Combo(Card.sA, Card.sK),
      new Combo(Card.hA, Card.hK),
      new Combo(Card.cA, Card.cK),
      new Combo(Card.dA, Card.dK)
    );
  public static readonly sAQ = new Hand(
      'AQs',
      new Combo(Card.sA, Card.sQ),
      new Combo(Card.hA, Card.hQ),
      new Combo(Card.cA, Card.cQ),
      new Combo(Card.dA, Card.dQ)
    );
  public static readonly sAJ = new Hand(
      'AJs',
      new Combo(Card.sA, Card.sJ),
      new Combo(Card.hA, Card.hJ),
      new Combo(Card.cA, Card.cJ),
      new Combo(Card.dA, Card.dJ)
    );
  public static readonly sAT = new Hand(
      'ATs',
      new Combo(Card.sA, Card.sT),
      new Combo(Card.hA, Card.hT),
      new Combo(Card.cA, Card.cT),
      new Combo(Card.dA, Card.dT)
    );
  public static readonly sA9 = new Hand(
      'A9s',
      new Combo(Card.sA, Card.s9),
      new Combo(Card.hA, Card.h9),
      new Combo(Card.cA, Card.c9),
      new Combo(Card.dA, Card.d9),
    );
  public static readonly sA8 = new Hand(
      'A8s',
      new Combo(Card.sA, Card.s8),
      new Combo(Card.hA, Card.h8),
      new Combo(Card.cA, Card.c8),
      new Combo(Card.dA, Card.d8)
    );
  public static readonly sA7 = new Hand(
      'A7s',
      new Combo(Card.sA, Card.s7),
      new Combo(Card.hA, Card.h7),
      new Combo(Card.cA, Card.c7),
      new Combo(Card.dA, Card.d7),
    );
  public static readonly sA6 = new Hand(
      'A6s',
      new Combo(Card.sA, Card.s6),
      new Combo(Card.hA, Card.h6),
      new Combo(Card.cA, Card.c6),
      new Combo(Card.dA, Card.d6)
    );
  public static readonly sA5 = new Hand(
      'A5s',
      new Combo(Card.sA, Card.s5),
      new Combo(Card.hA, Card.h5),
      new Combo(Card.cA, Card.c5),
      new Combo(Card.dA, Card.d5)
    );
  public static readonly sA4 = new Hand(
      'A4s',
      new Combo(Card.sA, Card.s4),
      new Combo(Card.hA, Card.h4),
      new Combo(Card.cA, Card.c4),
      new Combo(Card.dA, Card.d4),
    );
  public static readonly sA3 = new Hand(
      'A3s',
      new Combo(Card.sA, Card.s3),
      new Combo(Card.hA, Card.h3),
      new Combo(Card.cA, Card.c3),
      new Combo(Card.dA, Card.d3),
    );
  public static readonly sA2 = new Hand(
      'A2s',
      new Combo(Card.sA, Card.s2),
      new Combo(Card.hA, Card.h2),
      new Combo(Card.cA, Card.c2),
      new Combo(Card.dA, Card.d2)
    );
  public static readonly oAK = new Hand(
      'AKo',
      new Combo(Card.sA, Card.hK),
      new Combo(Card.sA, Card.cK),
      new Combo(Card.sA, Card.dK),
      new Combo(Card.hA, Card.cK),
      new Combo(Card.hA, Card.dK),
      new Combo(Card.hA, Card.sK),
      new Combo(Card.cA, Card.dK),
      new Combo(Card.cA, Card.hK),
      new Combo(Card.cA, Card.sK),
      new Combo(Card.dA, Card.sK),
      new Combo(Card.dA, Card.hK),
      new Combo(Card.dA, Card.cK)
    );
  public static readonly pKK = new Hand(
      'KKp',
      new Combo(Card.sK, Card.cK),
      new Combo(Card.sK, Card.hK),
      new Combo(Card.sK, Card.dK),
      new Combo(Card.cK, Card.hK),
      new Combo(Card.cK, Card.dK),
      new Combo(Card.hK, Card.dK)
    );
  public static readonly sKQ = new Hand(
      'KQs',
      new Combo(Card.sK, Card.sQ),
      new Combo(Card.hK, Card.hQ),
      new Combo(Card.cK, Card.cQ),
      new Combo(Card.dK, Card.dQ)
    );
  public static readonly sKJ = new Hand(
      'KJs',
      new Combo(Card.sK, Card.sJ),
      new Combo(Card.hK, Card.hJ),
      new Combo(Card.cK, Card.cJ),
      new Combo(Card.dK, Card.dJ)
    );
  public static readonly sKT = new Hand(
      'KTs',
      new Combo(Card.sK, Card.sT),
      new Combo(Card.hK, Card.hT),
      new Combo(Card.cK, Card.cT),
      new Combo(Card.dK, Card.dT)
    );
  public static readonly sK9 = new Hand(
      'K9s',
      new Combo(Card.sK, Card.s9),
      new Combo(Card.hK, Card.h9),
      new Combo(Card.cK, Card.c9),
      new Combo(Card.dK, Card.d9)
    );
  public static readonly sK8 = new Hand(
      'K8s',
      new Combo(Card.sK, Card.s8),
      new Combo(Card.hK, Card.h8),
      new Combo(Card.cK, Card.c8),
      new Combo(Card.dK, Card.d8)
    );
  public static readonly sK7 = new Hand(
      'K7s',
      new Combo(Card.sK, Card.s7),
      new Combo(Card.hK, Card.h7),
      new Combo(Card.cK, Card.c7),
      new Combo(Card.dK, Card.d7)
    );
  public static readonly sK6 = new Hand(
      'K6s',
      new Combo(Card.sK, Card.s6),
      new Combo(Card.hK, Card.h6),
      new Combo(Card.cK, Card.c6),
      new Combo(Card.dK, Card.d6)
    );
  public static readonly sK5 = new Hand(
      'K5s',
      new Combo(Card.sK, Card.s5),
      new Combo(Card.hK, Card.h5),
      new Combo(Card.cK, Card.c5),
      new Combo(Card.dK, Card.d5)
    );
  public static readonly  sK4 = new Hand(
      'K4s',
      new Combo(Card.sK, Card.s4),
      new Combo(Card.hK, Card.h4),
      new Combo(Card.cK, Card.c4),
      new Combo(Card.dK, Card.d4)
    );
  public static readonly sK3 = new Hand(
      'K3s',
      new Combo(Card.sK, Card.s3),
      new Combo(Card.hK, Card.h3),
      new Combo(Card.cK, Card.c3),
      new Combo(Card.dK, Card.d3)
    );
  public static readonly sK2 = new Hand(
      'K2s',
      new Combo(Card.sK, Card.s2),
      new Combo(Card.hK, Card.h2),
      new Combo(Card.cK, Card.c2),
      new Combo(Card.dK, Card.d2)
    );
  public static readonly oAQ = new Hand(
      'AQo',
      new Combo(Card.sA, Card.hQ),
      new Combo(Card.sA, Card.cQ),
      new Combo(Card.sA, Card.dQ),
      new Combo(Card.hA, Card.cQ),
      new Combo(Card.hA, Card.dQ),
      new Combo(Card.hA, Card.sQ),
      new Combo(Card.cA, Card.dQ),
      new Combo(Card.cA, Card.hQ),
      new Combo(Card.cA, Card.sQ),
      new Combo(Card.dA, Card.sQ),
      new Combo(Card.dA, Card.hQ),
      new Combo(Card.dA, Card.cQ)
    );
  public static readonly oKQ = new Hand(
      'KQo',
      new Combo(Card.sK, Card.hQ),
      new Combo(Card.sK, Card.cQ),
      new Combo(Card.sK, Card.dQ),
      new Combo(Card.hK, Card.cQ),
      new Combo(Card.hK, Card.dQ),
      new Combo(Card.hK, Card.sQ),
      new Combo(Card.cK, Card.dQ),
      new Combo(Card.cK, Card.hQ),
      new Combo(Card.cK, Card.sQ),
      new Combo(Card.dK, Card.sQ),
      new Combo(Card.dK, Card.hQ),
      new Combo(Card.dK, Card.cQ)
    );
  public static readonly pQQ = new Hand(
      'QQp',
      new Combo(Card.sQ, Card.cQ),
      new Combo(Card.sQ, Card.hQ),
      new Combo(Card.sQ, Card.dQ),
      new Combo(Card.cQ, Card.hQ),
      new Combo(Card.cQ, Card.dQ),
      new Combo(Card.hQ, Card.dQ)
    );
  public static readonly sQJ = new Hand(
      'QJs',
      new Combo(Card.sQ, Card.sJ),
      new Combo(Card.hQ, Card.hJ),
      new Combo(Card.cQ, Card.cJ),
      new Combo(Card.dQ, Card.dJ)
    );
  public static readonly sQT = new Hand(
      'QTs',
      new Combo(Card.sQ, Card.sT),
      new Combo(Card.hQ, Card.hT),
      new Combo(Card.cQ, Card.cT),
      new Combo(Card.dQ, Card.dT)
    );
  public static readonly sQ9 = new Hand(
      'Q9s',
      new Combo(Card.sQ, Card.s9),
      new Combo(Card.hQ, Card.h9),
      new Combo(Card.cQ, Card.c9),
      new Combo(Card.dQ, Card.d9)
    );
  public static readonly sQ8 = new Hand(
      'Q8s',
      new Combo(Card.sQ, Card.s8),
      new Combo(Card.hQ, Card.h8),
      new Combo(Card.cQ, Card.c8),
      new Combo(Card.dQ, Card.d8)
    );
  public static readonly sQ7 = new Hand(
      'Q7s',
      new Combo(Card.sQ, Card.s7),
      new Combo(Card.hQ, Card.h7),
      new Combo(Card.cQ, Card.c7),
      new Combo(Card.dQ, Card.d7)
    );
  public static readonly sQ6 = new Hand(
      'Q6s',
      new Combo(Card.sQ, Card.s6),
      new Combo(Card.hQ, Card.h6),
      new Combo(Card.cQ, Card.c6),
      new Combo(Card.dQ, Card.d6)
    );
  public static readonly sQ5 = new Hand(
      'Q5s',
      new Combo(Card.sQ, Card.s5),
      new Combo(Card.hQ, Card.h5),
      new Combo(Card.cQ, Card.c5),
      new Combo(Card.dQ, Card.d5)
    );
  public static readonly sQ4 = new Hand(
      'Q4s',
      new Combo(Card.sQ, Card.s4),
      new Combo(Card.hQ, Card.h4),
      new Combo(Card.cQ, Card.c4),
      new Combo(Card.dQ, Card.d4)
    );
  public static readonly sQ3 = new Hand(
      'Q3s',
      new Combo(Card.sQ, Card.s3),
      new Combo(Card.hQ, Card.h3),
      new Combo(Card.cQ, Card.c3),
      new Combo(Card.dQ, Card.d3)
    );
  public static readonly sQ2 = new Hand(
      'Q2s',
      new Combo(Card.sQ, Card.s2),
      new Combo(Card.hQ, Card.h2),
      new Combo(Card.cQ, Card.c2),
      new Combo(Card.dQ, Card.d2)
    );
  public static readonly oAJ = new Hand(
      'AJo',
      new Combo(Card.sA, Card.hJ),
      new Combo(Card.sA, Card.cJ),
      new Combo(Card.sA, Card.dJ),
      new Combo(Card.hA, Card.cJ),
      new Combo(Card.hA, Card.dJ),
      new Combo(Card.hA, Card.sJ),
      new Combo(Card.cA, Card.dJ),
      new Combo(Card.cA, Card.hJ),
      new Combo(Card.cA, Card.sJ),
      new Combo(Card.dA, Card.sJ),
      new Combo(Card.dA, Card.hJ),
      new Combo(Card.dA, Card.cJ)
    );
  public static readonly oKJ = new Hand(
      'KJo',
      new Combo(Card.sK, Card.hJ),
      new Combo(Card.sK, Card.cJ),
      new Combo(Card.sK, Card.dJ),
      new Combo(Card.hK, Card.cJ),
      new Combo(Card.hK, Card.dJ),
      new Combo(Card.hK, Card.sJ),
      new Combo(Card.cK, Card.dJ),
      new Combo(Card.cK, Card.hJ),
      new Combo(Card.cK, Card.sJ),
      new Combo(Card.dK, Card.sJ),
      new Combo(Card.dK, Card.hJ),
      new Combo(Card.dK, Card.cJ)
    );
  public static readonly oQJ = new Hand(
      'QJo',
      new Combo(Card.sQ, Card.hJ),
      new Combo(Card.sQ, Card.cJ),
      new Combo(Card.sQ, Card.dJ),
      new Combo(Card.hQ, Card.cJ),
      new Combo(Card.hQ, Card.dJ),
      new Combo(Card.hQ, Card.sJ),
      new Combo(Card.cQ, Card.dJ),
      new Combo(Card.cQ, Card.hJ),
      new Combo(Card.cQ, Card.sJ),
      new Combo(Card.dQ, Card.sJ),
      new Combo(Card.dQ, Card.hJ),
      new Combo(Card.dQ, Card.cJ)
    );
  public static readonly pJJ = new Hand(
      'JJp',
      new Combo(Card.sJ, Card.cJ),
      new Combo(Card.sJ, Card.hJ),
      new Combo(Card.sJ, Card.dJ),
      new Combo(Card.cJ, Card.hJ),
      new Combo(Card.cJ, Card.dJ),
      new Combo(Card.hJ, Card.dJ)
    );
  public static readonly sJT = new Hand(
      'JTs',
      new Combo(Card.sJ, Card.sT),
      new Combo(Card.hJ, Card.hT),
      new Combo(Card.cJ, Card.cT),
      new Combo(Card.dJ, Card.dT)
    );
  public static readonly sJ9 = new Hand(
      'J9s',
      new Combo(Card.sJ, Card.s9),
      new Combo(Card.hJ, Card.h9),
      new Combo(Card.cJ, Card.c9),
      new Combo(Card.dJ, Card.d9)
    );
  public static readonly sJ8 = new Hand(
      'J8s',
      new Combo(Card.sJ, Card.s8),
      new Combo(Card.hJ, Card.h8),
      new Combo(Card.cJ, Card.c8),
      new Combo(Card.dJ, Card.d8)
    );
  public static readonly sJ7 = new Hand(
      'J7s',
      new Combo(Card.sJ, Card.s7),
      new Combo(Card.hJ, Card.h7),
      new Combo(Card.cJ, Card.c7),
      new Combo(Card.dJ, Card.d7)
    );
  public static readonly sJ6 = new Hand(
      'J6s',
      new Combo(Card.sJ, Card.s6),
      new Combo(Card.hJ, Card.h6),
      new Combo(Card.cJ, Card.c6),
      new Combo(Card.dJ, Card.d6)
    );
  public static readonly sJ5 = new Hand(
      'J5s',
      new Combo(Card.sJ, Card.s5),
      new Combo(Card.hJ, Card.h5),
      new Combo(Card.cJ, Card.c5),
      new Combo(Card.dJ, Card.d5)
    );
  public static readonly sJ4 = new Hand(
      'J4s',
      new Combo(Card.sJ, Card.s4),
      new Combo(Card.hJ, Card.h4),
      new Combo(Card.cJ, Card.c4),
      new Combo(Card.dJ, Card.d4)
    );
  public static readonly sJ3 = new Hand(
      'J3s',
      new Combo(Card.sJ, Card.s3),
      new Combo(Card.hJ, Card.h3),
      new Combo(Card.cJ, Card.c3),
      new Combo(Card.dJ, Card.d3)
    );
  public static readonly sJ2 = new Hand(
      'J2s',
      new Combo(Card.sJ, Card.s2),
      new Combo(Card.hJ, Card.h2),
      new Combo(Card.cJ, Card.c2),
      new Combo(Card.dJ, Card.d2)
    );
  public static readonly oAT = new Hand(
      'ATo',
      new Combo(Card.sA, Card.hT),
      new Combo(Card.sA, Card.cT),
      new Combo(Card.sA, Card.dT),
      new Combo(Card.hA, Card.cT),
      new Combo(Card.hA, Card.dT),
      new Combo(Card.hA, Card.sT),
      new Combo(Card.cA, Card.dT),
      new Combo(Card.cA, Card.hT),
      new Combo(Card.cA, Card.sT),
      new Combo(Card.dA, Card.sT),
      new Combo(Card.dA, Card.hT),
      new Combo(Card.dA, Card.cT)
    );
  public static readonly oKT = new Hand(
      'KTo',
      new Combo(Card.sK, Card.hT),
      new Combo(Card.sK, Card.cT),
      new Combo(Card.sK, Card.dT),
      new Combo(Card.hK, Card.cT),
      new Combo(Card.hK, Card.dT),
      new Combo(Card.hK, Card.sT),
      new Combo(Card.cK, Card.dT),
      new Combo(Card.cK, Card.hT),
      new Combo(Card.cK, Card.sT),
      new Combo(Card.dK, Card.sT),
      new Combo(Card.dK, Card.hT),
      new Combo(Card.dK, Card.cT)
    );
  public static readonly oQT = new Hand(
      'QTo',
      new Combo(Card.sQ, Card.hT),
      new Combo(Card.sQ, Card.cT),
      new Combo(Card.sQ, Card.dT),
      new Combo(Card.hQ, Card.cT),
      new Combo(Card.hQ, Card.dT),
      new Combo(Card.hQ, Card.sT),
      new Combo(Card.cQ, Card.dT),
      new Combo(Card.cQ, Card.hT),
      new Combo(Card.cQ, Card.sT),
      new Combo(Card.dQ, Card.sT),
      new Combo(Card.dQ, Card.hT),
      new Combo(Card.dQ, Card.cT)
    );
  public static readonly oJT = new Hand(
      'JTo',
      new Combo(Card.sJ, Card.hT),
      new Combo(Card.sJ, Card.cT),
      new Combo(Card.sJ, Card.dT),
      new Combo(Card.hJ, Card.cT),
      new Combo(Card.hJ, Card.dT),
      new Combo(Card.hJ, Card.sT),
      new Combo(Card.cJ, Card.dT),
      new Combo(Card.cJ, Card.hT),
      new Combo(Card.cJ, Card.sT),
      new Combo(Card.dJ, Card.sT),
      new Combo(Card.dJ, Card.hT),
      new Combo(Card.dJ, Card.cT)
    );
  public static readonly pTT = new Hand(
      'TTp',
      new Combo(Card.sT, Card.cT),
      new Combo(Card.sT, Card.hT),
      new Combo(Card.sT, Card.dT),
      new Combo(Card.cT, Card.hT),
      new Combo(Card.cT, Card.dT),
      new Combo(Card.hT, Card.dT)
    );
  public static readonly sT9 = new Hand(
      'T9s',
      new Combo(Card.sT, Card.s9),
      new Combo(Card.hT, Card.h9),
      new Combo(Card.cT, Card.c9),
      new Combo(Card.dT, Card.d9)
    );
  public static readonly sT8 = new Hand(
      'T8s',
      new Combo(Card.sT, Card.s8),
      new Combo(Card.hT, Card.h8),
      new Combo(Card.cT, Card.c8),
      new Combo(Card.dT, Card.d8)
    );
  public static readonly sT7 = new Hand(
      'T7s',
      new Combo(Card.sT, Card.s7),
      new Combo(Card.hT, Card.h7),
      new Combo(Card.cT, Card.c7),
      new Combo(Card.dT, Card.d7)
    );
  public static readonly sT6 = new Hand(
      'T6s',
      new Combo(Card.sT, Card.s6),
      new Combo(Card.hT, Card.h6),
      new Combo(Card.cT, Card.c6),
      new Combo(Card.dT, Card.d6)
    );
  public static readonly sT5 = new Hand(
      'T5s',
      new Combo(Card.sT, Card.s5),
      new Combo(Card.hT, Card.h5),
      new Combo(Card.cT, Card.c5),
      new Combo(Card.dT, Card.d5)
    );
  public static readonly sT4 = new Hand(
      'T4s',
      new Combo(Card.sT, Card.s4),
      new Combo(Card.hT, Card.h4),
      new Combo(Card.cT, Card.c4),
      new Combo(Card.dT, Card.d4)
    );
  public static readonly sT3 = new Hand(
      'T3s',
      new Combo(Card.sT, Card.s3),
      new Combo(Card.hT, Card.h3),
      new Combo(Card.cT, Card.c3),
      new Combo(Card.dT, Card.d3)
    );
  public static readonly sT2 = new Hand(
      'T2s',
      new Combo(Card.sT, Card.s2),
      new Combo(Card.hT, Card.h2),
      new Combo(Card.cT, Card.c2),
      new Combo(Card.dT, Card.d2)
    );
  public static readonly oA9 = new Hand(
      'A9o',
      new Combo(Card.sA, Card.h9),
      new Combo(Card.sA, Card.c9),
      new Combo(Card.sA, Card.d9),
      new Combo(Card.hA, Card.c9),
      new Combo(Card.hA, Card.d9),
      new Combo(Card.hA, Card.s9),
      new Combo(Card.cA, Card.d9),
      new Combo(Card.cA, Card.h9),
      new Combo(Card.cA, Card.s9),
      new Combo(Card.dA, Card.s9),
      new Combo(Card.dA, Card.h9),
      new Combo(Card.dA, Card.c9)
    );
  public static readonly oK9 = new Hand(
      'K9o',
      new Combo(Card.sK, Card.h9),
      new Combo(Card.sK, Card.c9),
      new Combo(Card.sK, Card.d9),
      new Combo(Card.hK, Card.c9),
      new Combo(Card.hK, Card.d9),
      new Combo(Card.hK, Card.s9),
      new Combo(Card.cK, Card.d9),
      new Combo(Card.cK, Card.h9),
      new Combo(Card.cK, Card.s9),
      new Combo(Card.dK, Card.s9),
      new Combo(Card.dK, Card.h9),
      new Combo(Card.dK, Card.c9)
    );
  public static readonly oQ9 = new Hand(
      'Q9o',
      new Combo(Card.sQ, Card.h9),
      new Combo(Card.sQ, Card.c9),
      new Combo(Card.sQ, Card.d9),
      new Combo(Card.hQ, Card.c9),
      new Combo(Card.hQ, Card.d9),
      new Combo(Card.hQ, Card.s9),
      new Combo(Card.cQ, Card.d9),
      new Combo(Card.cQ, Card.h9),
      new Combo(Card.cQ, Card.s9),
      new Combo(Card.dQ, Card.s9),
      new Combo(Card.dQ, Card.h9),
      new Combo(Card.dQ, Card.c9)
    );
  public static readonly oJ9 = new Hand(
      'J9o',
      new Combo(Card.sJ, Card.h9),
      new Combo(Card.sJ, Card.c9),
      new Combo(Card.sJ, Card.d9),
      new Combo(Card.hJ, Card.c9),
      new Combo(Card.hJ, Card.d9),
      new Combo(Card.hJ, Card.s9),
      new Combo(Card.cJ, Card.d9),
      new Combo(Card.cJ, Card.h9),
      new Combo(Card.cJ, Card.s9),
      new Combo(Card.dJ, Card.s9),
      new Combo(Card.dJ, Card.h9),
      new Combo(Card.dJ, Card.c9)
    );
  public static readonly oT9 = new Hand(
      'T9o',
      new Combo(Card.sT, Card.h9),
      new Combo(Card.sT, Card.c9),
      new Combo(Card.sT, Card.d9),
      new Combo(Card.hT, Card.c9),
      new Combo(Card.hT, Card.d9),
      new Combo(Card.hT, Card.s9),
      new Combo(Card.cT, Card.d9),
      new Combo(Card.cT, Card.h9),
      new Combo(Card.cT, Card.s9),
      new Combo(Card.dT, Card.s9),
      new Combo(Card.dT, Card.h9),
      new Combo(Card.dT, Card.c9)
    );
  public static readonly p99 = new Hand(
      '99p',
      new Combo(Card.s9, Card.c9),
      new Combo(Card.s9, Card.h9),
      new Combo(Card.s9, Card.d9),
      new Combo(Card.c9, Card.h9),
      new Combo(Card.c9, Card.d9),
      new Combo(Card.h9, Card.d9)
    );
  public static readonly s98 = new Hand(
      '98s',
      new Combo(Card.s9, Card.s8),
      new Combo(Card.h9, Card.h8),
      new Combo(Card.c9, Card.c8),
      new Combo(Card.d9, Card.d8)
    );
  public static readonly s97 = new Hand(
      '97s',
      new Combo(Card.s9, Card.s7),
      new Combo(Card.h9, Card.h7),
      new Combo(Card.c9, Card.c7),
      new Combo(Card.d9, Card.d7)
    );
  public static readonly s96 = new Hand(
      '96s',
      new Combo(Card.s9, Card.s6),
      new Combo(Card.h9, Card.h6),
      new Combo(Card.c9, Card.c6),
      new Combo(Card.d9, Card.d6)
    );
  public static readonly s95 = new Hand(
      '95s',
      new Combo(Card.s9, Card.s5),
      new Combo(Card.h9, Card.h5),
      new Combo(Card.c9, Card.c5),
      new Combo(Card.d9, Card.d5)
    );
  public static readonly s94 = new Hand(
      '94s',
      new Combo(Card.s9, Card.s4),
      new Combo(Card.h9, Card.h4),
      new Combo(Card.c9, Card.c4),
      new Combo(Card.d9, Card.d4)
    );
  public static readonly s93 = new Hand(
      '93s',
      new Combo(Card.s9, Card.s3),
      new Combo(Card.h9, Card.h3),
      new Combo(Card.c9, Card.c3),
      new Combo(Card.d9, Card.d3)
    );
  public static readonly s92 = new Hand(
      '92s',
      new Combo(Card.s9, Card.s2),
      new Combo(Card.h9, Card.h2),
      new Combo(Card.c9, Card.c2),
      new Combo(Card.d9, Card.d2)
    );
  public static readonly oA8 = new Hand(
      'A8o',
      new Combo(Card.sA, Card.h8),
      new Combo(Card.sA, Card.c8),
      new Combo(Card.sA, Card.d8),
      new Combo(Card.hA, Card.c8),
      new Combo(Card.hA, Card.d8),
      new Combo(Card.hA, Card.s8),
      new Combo(Card.cA, Card.d8),
      new Combo(Card.cA, Card.h8),
      new Combo(Card.cA, Card.s8),
      new Combo(Card.dA, Card.s8),
      new Combo(Card.dA, Card.h8),
      new Combo(Card.dA, Card.c8)
    );
  public static readonly oK8 = new Hand(
      'K8o',
      new Combo(Card.sK, Card.h8),
      new Combo(Card.sK, Card.c8),
      new Combo(Card.sK, Card.d8),
      new Combo(Card.hK, Card.c8),
      new Combo(Card.hK, Card.d8),
      new Combo(Card.hK, Card.s8),
      new Combo(Card.cK, Card.d8),
      new Combo(Card.cK, Card.h8),
      new Combo(Card.cK, Card.s8),
      new Combo(Card.dK, Card.s8),
      new Combo(Card.dK, Card.h8),
      new Combo(Card.dK, Card.c8)
    );
  public static readonly oQ8 = new Hand(
      'Q8o',
      new Combo(Card.sQ, Card.h8),
      new Combo(Card.sQ, Card.c8),
      new Combo(Card.sQ, Card.d8),
      new Combo(Card.hQ, Card.c8),
      new Combo(Card.hQ, Card.d8),
      new Combo(Card.hQ, Card.s8),
      new Combo(Card.cQ, Card.d8),
      new Combo(Card.cQ, Card.h8),
      new Combo(Card.cQ, Card.s8),
      new Combo(Card.dQ, Card.s8),
      new Combo(Card.dQ, Card.h8),
      new Combo(Card.dQ, Card.c8)
    );
  public static readonly oJ8 = new Hand(
      'J8o',
      new Combo(Card.sJ, Card.h8),
      new Combo(Card.sJ, Card.c8),
      new Combo(Card.sJ, Card.d8),
      new Combo(Card.hJ, Card.c8),
      new Combo(Card.hJ, Card.d8),
      new Combo(Card.hJ, Card.s8),
      new Combo(Card.cJ, Card.d8),
      new Combo(Card.cJ, Card.h8),
      new Combo(Card.cJ, Card.s8),
      new Combo(Card.dJ, Card.s8),
      new Combo(Card.dJ, Card.h8),
      new Combo(Card.dJ, Card.c8)
    );
  public static readonly oT8 = new Hand(
      'T8o',
      new Combo(Card.sT, Card.h8),
      new Combo(Card.sT, Card.c8),
      new Combo(Card.sT, Card.d8),
      new Combo(Card.hT, Card.c8),
      new Combo(Card.hT, Card.d8),
      new Combo(Card.hT, Card.s8),
      new Combo(Card.cT, Card.d8),
      new Combo(Card.cT, Card.h8),
      new Combo(Card.cT, Card.s8),
      new Combo(Card.dT, Card.s8),
      new Combo(Card.dT, Card.h8),
      new Combo(Card.dT, Card.c8)
    );
  public static readonly o98 = new Hand(
      '98o',
      new Combo(Card.s9, Card.h8),
      new Combo(Card.s9, Card.c8),
      new Combo(Card.s9, Card.d8),
      new Combo(Card.h9, Card.c8),
      new Combo(Card.h9, Card.d8),
      new Combo(Card.h9, Card.s8),
      new Combo(Card.c9, Card.d8),
      new Combo(Card.c9, Card.h8),
      new Combo(Card.c9, Card.s8),
      new Combo(Card.d9, Card.s8),
      new Combo(Card.d9, Card.h8),
      new Combo(Card.d9, Card.c8)
    );
  public static readonly p88 = new Hand(
      '88p',
      new Combo(Card.s8, Card.c8),
      new Combo(Card.s8, Card.h8),
      new Combo(Card.s8, Card.d8),
      new Combo(Card.c8, Card.h8),
      new Combo(Card.c8, Card.d8),
      new Combo(Card.h8, Card.d8)
    );
  public static readonly s87 = new Hand(
      '87s',
      new Combo(Card.s8, Card.s7),
      new Combo(Card.h8, Card.h7),
      new Combo(Card.c8, Card.c7),
      new Combo(Card.d8, Card.d7)
    );
  public static readonly s86 = new Hand(
      '86s',
      new Combo(Card.s8, Card.s6),
      new Combo(Card.h8, Card.h6),
      new Combo(Card.c8, Card.c6),
      new Combo(Card.d8, Card.d6)
    );
  public static readonly s85 = new Hand(
      '85s',
      new Combo(Card.s8, Card.s5),
      new Combo(Card.h8, Card.h5),
      new Combo(Card.c8, Card.c5),
      new Combo(Card.d8, Card.d5)
    );
  public static readonly s84 = new Hand(
      '84s',
      new Combo(Card.s8, Card.s4),
      new Combo(Card.h8, Card.h4),
      new Combo(Card.c8, Card.c4),
      new Combo(Card.d8, Card.d4)
    );
  public static readonly s83 = new Hand(
      '83s',
      new Combo(Card.s8, Card.s3),
      new Combo(Card.h8, Card.h3),
      new Combo(Card.c8, Card.c3),
      new Combo(Card.d8, Card.d3)
    );
  public static readonly s82 = new Hand(
      '82s',
      new Combo(Card.s8, Card.s2),
      new Combo(Card.h8, Card.h2),
      new Combo(Card.c8, Card.c2),
      new Combo(Card.d8, Card.d2)
    );
  public static readonly oA7 = new Hand(
      'A7o',
      new Combo(Card.sA, Card.h7),
      new Combo(Card.sA, Card.c7),
      new Combo(Card.sA, Card.d7),
      new Combo(Card.hA, Card.c7),
      new Combo(Card.hA, Card.d7),
      new Combo(Card.hA, Card.s7),
      new Combo(Card.cA, Card.d7),
      new Combo(Card.cA, Card.h7),
      new Combo(Card.cA, Card.s7),
      new Combo(Card.dA, Card.s7),
      new Combo(Card.dA, Card.h7),
      new Combo(Card.dA, Card.c7)
    );
  public static readonly oK7 = new Hand(
      'K7o',
      new Combo(Card.sK, Card.h7),
      new Combo(Card.sK, Card.c7),
      new Combo(Card.sK, Card.d7),
      new Combo(Card.hK, Card.c7),
      new Combo(Card.hK, Card.d7),
      new Combo(Card.hK, Card.s7),
      new Combo(Card.cK, Card.d7),
      new Combo(Card.cK, Card.h7),
      new Combo(Card.cK, Card.s7),
      new Combo(Card.dK, Card.s7),
      new Combo(Card.dK, Card.h7),
      new Combo(Card.dK, Card.c7)
    );
  public static readonly oQ7 = new Hand(
      'Q7o',
      new Combo(Card.sQ, Card.h7),
      new Combo(Card.sQ, Card.c7),
      new Combo(Card.sQ, Card.d7),
      new Combo(Card.hQ, Card.c7),
      new Combo(Card.hQ, Card.d7),
      new Combo(Card.hQ, Card.s7),
      new Combo(Card.cQ, Card.d7),
      new Combo(Card.cQ, Card.h7),
      new Combo(Card.cQ, Card.s7),
      new Combo(Card.dQ, Card.s7),
      new Combo(Card.dQ, Card.h7),
      new Combo(Card.dQ, Card.c7)
    );
  public static readonly oJ7 = new Hand(
      'J7o',
      new Combo(Card.sJ, Card.h7),
      new Combo(Card.sJ, Card.c7),
      new Combo(Card.sJ, Card.d7),
      new Combo(Card.hJ, Card.c7),
      new Combo(Card.hJ, Card.d7),
      new Combo(Card.hJ, Card.s7),
      new Combo(Card.cJ, Card.d7),
      new Combo(Card.cJ, Card.h7),
      new Combo(Card.cJ, Card.s7),
      new Combo(Card.dJ, Card.s7),
      new Combo(Card.dJ, Card.h7),
      new Combo(Card.dJ, Card.c7)
    );
  public static readonly oT7 = new Hand(
      'T7o',
      new Combo(Card.sT, Card.h7),
      new Combo(Card.sT, Card.c7),
      new Combo(Card.sT, Card.d7),
      new Combo(Card.hT, Card.c7),
      new Combo(Card.hT, Card.d7),
      new Combo(Card.hT, Card.s7),
      new Combo(Card.cT, Card.d7),
      new Combo(Card.cT, Card.h7),
      new Combo(Card.cT, Card.s7),
      new Combo(Card.dT, Card.s7),
      new Combo(Card.dT, Card.h7),
      new Combo(Card.dT, Card.c7)
    );
  public static readonly o97 = new Hand(
      '97o',
      new Combo(Card.s9, Card.h7),
      new Combo(Card.s9, Card.c7),
      new Combo(Card.s9, Card.d7),
      new Combo(Card.h9, Card.c7),
      new Combo(Card.h9, Card.d7),
      new Combo(Card.h9, Card.s7),
      new Combo(Card.c9, Card.d7),
      new Combo(Card.c9, Card.h7),
      new Combo(Card.c9, Card.s7),
      new Combo(Card.d9, Card.s7),
      new Combo(Card.d9, Card.h7),
      new Combo(Card.d9, Card.c7)
    );
  public static readonly o87 = new Hand(
      '87o',
      new Combo(Card.s8, Card.h7),
      new Combo(Card.s8, Card.c7),
      new Combo(Card.s8, Card.d7),
      new Combo(Card.h8, Card.c7),
      new Combo(Card.h8, Card.d7),
      new Combo(Card.h8, Card.s7),
      new Combo(Card.c8, Card.d7),
      new Combo(Card.c8, Card.h7),
      new Combo(Card.c8, Card.s7),
      new Combo(Card.d8, Card.s7),
      new Combo(Card.d8, Card.h7),
      new Combo(Card.d8, Card.c7)
    );
  public static readonly p77 = new Hand(
      '77p',
      new Combo(Card.s7, Card.c7),
      new Combo(Card.s7, Card.h7),
      new Combo(Card.s7, Card.d7),
      new Combo(Card.c7, Card.h7),
      new Combo(Card.c7, Card.d7),
      new Combo(Card.h7, Card.d7)
    );
  public static readonly s76 = new Hand(
      '76s',
      new Combo(Card.s7, Card.s6),
      new Combo(Card.h7, Card.h6),
      new Combo(Card.c7, Card.c6),
      new Combo(Card.d7, Card.d6)
    );
  public static readonly s75 = new Hand(
      '75s',
      new Combo(Card.s7, Card.s5),
      new Combo(Card.h7, Card.h5),
      new Combo(Card.c7, Card.c5),
      new Combo(Card.d7, Card.d5)
    );
  public static readonly s74 = new Hand(
      '74s',
      new Combo(Card.s7, Card.s4),
      new Combo(Card.h7, Card.h4),
      new Combo(Card.c7, Card.c4),
      new Combo(Card.d7, Card.d4)
    );
  public static readonly s73 = new Hand(
      '73s',
      new Combo(Card.s7, Card.s3),
      new Combo(Card.h7, Card.h3),
      new Combo(Card.c7, Card.c3),
      new Combo(Card.d7, Card.d3)
    );
  public static readonly s72 = new Hand(
      '72s',
      new Combo(Card.s7, Card.s2),
      new Combo(Card.h7, Card.h2),
      new Combo(Card.c7, Card.c2),
      new Combo(Card.d7, Card.d2)
    );
  public static readonly oA6 = new Hand(
      'A6o',
      new Combo(Card.sA, Card.h6),
      new Combo(Card.sA, Card.c6),
      new Combo(Card.sA, Card.d6),
      new Combo(Card.hA, Card.c6),
      new Combo(Card.hA, Card.d6),
      new Combo(Card.hA, Card.s6),
      new Combo(Card.cA, Card.d6),
      new Combo(Card.cA, Card.h6),
      new Combo(Card.cA, Card.s6),
      new Combo(Card.dA, Card.s6),
      new Combo(Card.dA, Card.h6),
      new Combo(Card.dA, Card.c6)
    );
  public static readonly oK6 = new Hand(
      'K6o',
      new Combo(Card.sK, Card.h6),
      new Combo(Card.sK, Card.c6),
      new Combo(Card.sK, Card.d6),
      new Combo(Card.hK, Card.c6),
      new Combo(Card.hK, Card.d6),
      new Combo(Card.hK, Card.s6),
      new Combo(Card.cK, Card.d6),
      new Combo(Card.cK, Card.h6),
      new Combo(Card.cK, Card.s6),
      new Combo(Card.dK, Card.s6),
      new Combo(Card.dK, Card.h6),
      new Combo(Card.dK, Card.c6)
    );
  public static readonly oQ6 = new Hand(
      'Q6o',
      new Combo(Card.sQ, Card.h6),
      new Combo(Card.sQ, Card.c6),
      new Combo(Card.sQ, Card.d6),
      new Combo(Card.hQ, Card.c6),
      new Combo(Card.hQ, Card.d6),
      new Combo(Card.hQ, Card.s6),
      new Combo(Card.cQ, Card.d6),
      new Combo(Card.cQ, Card.h6),
      new Combo(Card.cQ, Card.s6),
      new Combo(Card.dQ, Card.s6),
      new Combo(Card.dQ, Card.h6),
      new Combo(Card.dQ, Card.c6)
    );
  public static readonly oJ6 = new Hand(
      'J6o',
      new Combo(Card.sJ, Card.h6),
      new Combo(Card.sJ, Card.c6),
      new Combo(Card.sJ, Card.d6),
      new Combo(Card.hJ, Card.c6),
      new Combo(Card.hJ, Card.d6),
      new Combo(Card.hJ, Card.s6),
      new Combo(Card.cJ, Card.d6),
      new Combo(Card.cJ, Card.h6),
      new Combo(Card.cJ, Card.s6),
      new Combo(Card.dJ, Card.s6),
      new Combo(Card.dJ, Card.h6),
      new Combo(Card.dJ, Card.c6)
    );
  public static readonly oT6 = new Hand(
      'T6o',
      new Combo(Card.sT, Card.h6),
      new Combo(Card.sT, Card.c6),
      new Combo(Card.sT, Card.d6),
      new Combo(Card.hT, Card.c6),
      new Combo(Card.hT, Card.d6),
      new Combo(Card.hT, Card.s6),
      new Combo(Card.cT, Card.d6),
      new Combo(Card.cT, Card.h6),
      new Combo(Card.cT, Card.s6),
      new Combo(Card.dT, Card.s6),
      new Combo(Card.dT, Card.h6),
      new Combo(Card.dT, Card.c6)
    );
  public static readonly o96 = new Hand(
      '96o',
      new Combo(Card.s9, Card.h6),
      new Combo(Card.s9, Card.c6),
      new Combo(Card.s9, Card.d6),
      new Combo(Card.h9, Card.c6),
      new Combo(Card.h9, Card.d6),
      new Combo(Card.h9, Card.s6),
      new Combo(Card.c9, Card.d6),
      new Combo(Card.c9, Card.h6),
      new Combo(Card.c9, Card.s6),
      new Combo(Card.d9, Card.s6),
      new Combo(Card.d9, Card.h6),
      new Combo(Card.d9, Card.c6)
    );
  public static readonly o86 = new Hand(
      '86o',
      new Combo(Card.s8, Card.h6),
      new Combo(Card.s8, Card.c6),
      new Combo(Card.s8, Card.d6),
      new Combo(Card.h8, Card.c6),
      new Combo(Card.h8, Card.d6),
      new Combo(Card.h8, Card.s6),
      new Combo(Card.c8, Card.d6),
      new Combo(Card.c8, Card.h6),
      new Combo(Card.c8, Card.s6),
      new Combo(Card.d8, Card.s6),
      new Combo(Card.d8, Card.h6),
      new Combo(Card.d8, Card.c6)
    );
  public static readonly o76 = new Hand(
      '76o',
      new Combo(Card.s7, Card.h6),
      new Combo(Card.s7, Card.c6),
      new Combo(Card.s7, Card.d6),
      new Combo(Card.h7, Card.c6),
      new Combo(Card.h7, Card.d6),
      new Combo(Card.h7, Card.s6),
      new Combo(Card.c7, Card.d6),
      new Combo(Card.c7, Card.h6),
      new Combo(Card.c7, Card.s6),
      new Combo(Card.d7, Card.s6),
      new Combo(Card.d7, Card.h6),
      new Combo(Card.d7, Card.c6)
    );
  public static readonly p66 = new Hand(
      '66p',
      new Combo(Card.s6, Card.c6),
      new Combo(Card.s6, Card.h6),
      new Combo(Card.s6, Card.d6),
      new Combo(Card.c6, Card.h6),
      new Combo(Card.c6, Card.d6),
      new Combo(Card.h6, Card.d6)
    );
  public static readonly s65 = new Hand(
      '65s',
      new Combo(Card.s6, Card.s5),
      new Combo(Card.h6, Card.h5),
      new Combo(Card.c6, Card.c5),
      new Combo(Card.d6, Card.d5)
    );
  public static readonly s64 = new Hand(
      '64s',
      new Combo(Card.s6, Card.s4),
      new Combo(Card.h6, Card.h4),
      new Combo(Card.c6, Card.c4),
      new Combo(Card.d6, Card.d4)
    );
  public static readonly s63 = new Hand(
      '63s',
      new Combo(Card.s6, Card.s3),
      new Combo(Card.h6, Card.h3),
      new Combo(Card.c6, Card.c3),
      new Combo(Card.d6, Card.d3)
    );
  public static readonly s62 = new Hand(
      '62s',
      new Combo(Card.s6, Card.s2),
      new Combo(Card.h6, Card.h2),
      new Combo(Card.c6, Card.c2),
      new Combo(Card.d6, Card.d2)
    );
  public static readonly oA5 = new Hand(
      'A5o',
      new Combo(Card.sA, Card.h5),
      new Combo(Card.sA, Card.c5),
      new Combo(Card.sA, Card.d5),
      new Combo(Card.hA, Card.c5),
      new Combo(Card.hA, Card.d5),
      new Combo(Card.hA, Card.s5),
      new Combo(Card.cA, Card.d5),
      new Combo(Card.cA, Card.h5),
      new Combo(Card.cA, Card.s5),
      new Combo(Card.dA, Card.s5),
      new Combo(Card.dA, Card.h5),
      new Combo(Card.dA, Card.c5)
    );
  public static readonly oK5 = new Hand(
      'K5o',
      new Combo(Card.sK, Card.h5),
      new Combo(Card.sK, Card.c5),
      new Combo(Card.sK, Card.d5),
      new Combo(Card.hK, Card.c5),
      new Combo(Card.hK, Card.d5),
      new Combo(Card.hK, Card.s5),
      new Combo(Card.cK, Card.d5),
      new Combo(Card.cK, Card.h5),
      new Combo(Card.cK, Card.s5),
      new Combo(Card.dK, Card.s5),
      new Combo(Card.dK, Card.h5),
      new Combo(Card.dK, Card.c5)
    );
  public static readonly oQ5 = new Hand(
      'Q5o',
      new Combo(Card.sQ, Card.h5),
      new Combo(Card.sQ, Card.c5),
      new Combo(Card.sQ, Card.d5),
      new Combo(Card.hQ, Card.c5),
      new Combo(Card.hQ, Card.d5),
      new Combo(Card.hQ, Card.s5),
      new Combo(Card.cQ, Card.d5),
      new Combo(Card.cQ, Card.h5),
      new Combo(Card.cQ, Card.s5),
      new Combo(Card.dQ, Card.s5),
      new Combo(Card.dQ, Card.h5),
      new Combo(Card.dQ, Card.c5)
    );
  public static readonly oJ5 = new Hand(
      'J5o',
      new Combo(Card.sJ, Card.h5),
      new Combo(Card.sJ, Card.c5),
      new Combo(Card.sJ, Card.d5),
      new Combo(Card.hJ, Card.c5),
      new Combo(Card.hJ, Card.d5),
      new Combo(Card.hJ, Card.s5),
      new Combo(Card.cJ, Card.d5),
      new Combo(Card.cJ, Card.h5),
      new Combo(Card.cJ, Card.s5),
      new Combo(Card.dJ, Card.s5),
      new Combo(Card.dJ, Card.h5),
      new Combo(Card.dJ, Card.c5)
    );
  public static readonly oT5 = new Hand(
      'T5o',
      new Combo(Card.sT, Card.h5),
      new Combo(Card.sT, Card.c5),
      new Combo(Card.sT, Card.d5),
      new Combo(Card.hT, Card.c5),
      new Combo(Card.hT, Card.d5),
      new Combo(Card.hT, Card.s5),
      new Combo(Card.cT, Card.d5),
      new Combo(Card.cT, Card.h5),
      new Combo(Card.cT, Card.s5),
      new Combo(Card.dT, Card.s5),
      new Combo(Card.dT, Card.h5),
      new Combo(Card.dT, Card.c5)
    );
  public static readonly o95 = new Hand(
      '95o',
      new Combo(Card.s9, Card.h5),
      new Combo(Card.s9, Card.c5),
      new Combo(Card.s9, Card.d5),
      new Combo(Card.h9, Card.c5),
      new Combo(Card.h9, Card.d5),
      new Combo(Card.h9, Card.s5),
      new Combo(Card.c9, Card.d5),
      new Combo(Card.c9, Card.h5),
      new Combo(Card.c9, Card.s5),
      new Combo(Card.d9, Card.s5),
      new Combo(Card.d9, Card.h5),
      new Combo(Card.d9, Card.c5)
    );
  public static readonly o85 = new Hand(
      '85o',
      new Combo(Card.s8, Card.h5),
      new Combo(Card.s8, Card.c5),
      new Combo(Card.s8, Card.d5),
      new Combo(Card.h8, Card.c5),
      new Combo(Card.h8, Card.d5),
      new Combo(Card.h8, Card.s5),
      new Combo(Card.c8, Card.d5),
      new Combo(Card.c8, Card.h5),
      new Combo(Card.c8, Card.s5),
      new Combo(Card.d8, Card.s5),
      new Combo(Card.d8, Card.h5),
      new Combo(Card.d8, Card.c5)
    );
  public static readonly o75 = new Hand(
      '75o',
      new Combo(Card.s7, Card.h5),
      new Combo(Card.s7, Card.c5),
      new Combo(Card.s7, Card.d5),
      new Combo(Card.h7, Card.c5),
      new Combo(Card.h7, Card.d5),
      new Combo(Card.h7, Card.s5),
      new Combo(Card.c7, Card.d5),
      new Combo(Card.c7, Card.h5),
      new Combo(Card.c7, Card.s5),
      new Combo(Card.d7, Card.s5),
      new Combo(Card.d7, Card.h5),
      new Combo(Card.d7, Card.c5)
    );
  public static readonly o65 = new Hand(
      '65o',
      new Combo(Card.s6, Card.h5),
      new Combo(Card.s6, Card.c5),
      new Combo(Card.s6, Card.d5),
      new Combo(Card.h6, Card.c5),
      new Combo(Card.h6, Card.d5),
      new Combo(Card.h6, Card.s5),
      new Combo(Card.c6, Card.d5),
      new Combo(Card.c6, Card.h5),
      new Combo(Card.c6, Card.s5),
      new Combo(Card.d6, Card.s5),
      new Combo(Card.d6, Card.h5),
      new Combo(Card.d6, Card.c5)
    );
  public static readonly p55 = new Hand(
      '55p',
      new Combo(Card.s5, Card.c5),
      new Combo(Card.s5, Card.h5),
      new Combo(Card.s5, Card.d5),
      new Combo(Card.c5, Card.h5),
      new Combo(Card.c5, Card.d5),
      new Combo(Card.h5, Card.d5)
    );
  public static readonly s54 = new Hand(
      '54s',
      new Combo(Card.s5, Card.s4),
      new Combo(Card.h5, Card.h4),
      new Combo(Card.c5, Card.c4),
      new Combo(Card.d5, Card.d4)
    );
  public static readonly s53 = new Hand(
      '53s',
      new Combo(Card.s5, Card.s3),
      new Combo(Card.h5, Card.h3),
      new Combo(Card.c5, Card.c3),
      new Combo(Card.d5, Card.d3)
    );
  public static readonly s52 = new Hand(
      '52s',
      new Combo(Card.s5, Card.s2),
      new Combo(Card.h5, Card.h2),
      new Combo(Card.c5, Card.c2),
      new Combo(Card.d5, Card.d2)
    );
  public static readonly oA4 = new Hand(
      'A4o',
      new Combo(Card.sA, Card.h4),
      new Combo(Card.sA, Card.c4),
      new Combo(Card.sA, Card.d4),
      new Combo(Card.hA, Card.c4),
      new Combo(Card.hA, Card.d4),
      new Combo(Card.hA, Card.s4),
      new Combo(Card.cA, Card.d4),
      new Combo(Card.cA, Card.h4),
      new Combo(Card.cA, Card.s4),
      new Combo(Card.dA, Card.s4),
      new Combo(Card.dA, Card.h4),
      new Combo(Card.dA, Card.c4)
    );
  public static readonly oK4 = new Hand(
      'K4o',
      new Combo(Card.sK, Card.h4),
      new Combo(Card.sK, Card.c4),
      new Combo(Card.sK, Card.d4),
      new Combo(Card.hK, Card.c4),
      new Combo(Card.hK, Card.d4),
      new Combo(Card.hK, Card.s4),
      new Combo(Card.cK, Card.d4),
      new Combo(Card.cK, Card.h4),
      new Combo(Card.cK, Card.s4),
      new Combo(Card.dK, Card.s4),
      new Combo(Card.dK, Card.h4),
      new Combo(Card.dK, Card.c4)
    );
  public static readonly oQ4 = new Hand(
      'Q4o',
      new Combo(Card.sQ, Card.h4),
      new Combo(Card.sQ, Card.c4),
      new Combo(Card.sQ, Card.d4),
      new Combo(Card.hQ, Card.c4),
      new Combo(Card.hQ, Card.d4),
      new Combo(Card.hQ, Card.s4),
      new Combo(Card.cQ, Card.d4),
      new Combo(Card.cQ, Card.h4),
      new Combo(Card.cQ, Card.s4),
      new Combo(Card.dQ, Card.s4),
      new Combo(Card.dQ, Card.h4),
      new Combo(Card.dQ, Card.c4)
    );
  public static readonly oJ4 = new Hand(
      'J4o',
      new Combo(Card.sJ, Card.h4),
      new Combo(Card.sJ, Card.c4),
      new Combo(Card.sJ, Card.d4),
      new Combo(Card.hJ, Card.c4),
      new Combo(Card.hJ, Card.d4),
      new Combo(Card.hJ, Card.s4),
      new Combo(Card.cJ, Card.d4),
      new Combo(Card.cJ, Card.h4),
      new Combo(Card.cJ, Card.s4),
      new Combo(Card.dJ, Card.s4),
      new Combo(Card.dJ, Card.h4),
      new Combo(Card.dJ, Card.c4)
    );
  public static readonly oT4 = new Hand(
      'T4o',
      new Combo(Card.sT, Card.h4),
      new Combo(Card.sT, Card.c4),
      new Combo(Card.sT, Card.d4),
      new Combo(Card.hT, Card.c4),
      new Combo(Card.hT, Card.d4),
      new Combo(Card.hT, Card.s4),
      new Combo(Card.cT, Card.d4),
      new Combo(Card.cT, Card.h4),
      new Combo(Card.cT, Card.s4),
      new Combo(Card.dT, Card.s4),
      new Combo(Card.dT, Card.h4),
      new Combo(Card.dT, Card.c4)
    );
  public static readonly o94 = new Hand(
      '94o',
      new Combo(Card.s9, Card.h4),
      new Combo(Card.s9, Card.c4),
      new Combo(Card.s9, Card.d4),
      new Combo(Card.h9, Card.c4),
      new Combo(Card.h9, Card.d4),
      new Combo(Card.h9, Card.s4),
      new Combo(Card.c9, Card.d4),
      new Combo(Card.c9, Card.h4),
      new Combo(Card.c9, Card.s4),
      new Combo(Card.d9, Card.s4),
      new Combo(Card.d9, Card.h4),
      new Combo(Card.d9, Card.c4)
    );
  public static readonly o84 = new Hand(
      '84o',
      new Combo(Card.s8, Card.h4),
      new Combo(Card.s8, Card.c4),
      new Combo(Card.s8, Card.d4),
      new Combo(Card.h8, Card.c4),
      new Combo(Card.h8, Card.d4),
      new Combo(Card.h8, Card.s4),
      new Combo(Card.c8, Card.d4),
      new Combo(Card.c8, Card.h4),
      new Combo(Card.c8, Card.s4),
      new Combo(Card.d8, Card.s4),
      new Combo(Card.d8, Card.h4),
      new Combo(Card.d8, Card.c4)
    );
  public static readonly o74 = new Hand(
      '74o',
      new Combo(Card.s7, Card.h4),
      new Combo(Card.s7, Card.c4),
      new Combo(Card.s7, Card.d4),
      new Combo(Card.h7, Card.c4),
      new Combo(Card.h7, Card.d4),
      new Combo(Card.h7, Card.s4),
      new Combo(Card.c7, Card.d4),
      new Combo(Card.c7, Card.h4),
      new Combo(Card.c7, Card.s4),
      new Combo(Card.d7, Card.s4),
      new Combo(Card.d7, Card.h4),
      new Combo(Card.d7, Card.c4)
    );
  public static readonly o64 = new Hand(
      '64o',
      new Combo(Card.s6, Card.h4),
      new Combo(Card.s6, Card.c4),
      new Combo(Card.s6, Card.d4),
      new Combo(Card.h6, Card.c4),
      new Combo(Card.h6, Card.d4),
      new Combo(Card.h6, Card.s4),
      new Combo(Card.c6, Card.d4),
      new Combo(Card.c6, Card.h4),
      new Combo(Card.c6, Card.s4),
      new Combo(Card.d6, Card.s4),
      new Combo(Card.d6, Card.h4),
      new Combo(Card.d6, Card.c4)
    );
  public static readonly o54 = new Hand(
      '54o',
      new Combo(Card.s5, Card.h4),
      new Combo(Card.s5, Card.c4),
      new Combo(Card.s5, Card.d4),
      new Combo(Card.h5, Card.c4),
      new Combo(Card.h5, Card.d4),
      new Combo(Card.h5, Card.s4),
      new Combo(Card.c5, Card.d4),
      new Combo(Card.c5, Card.h4),
      new Combo(Card.c5, Card.s4),
      new Combo(Card.d5, Card.s4),
      new Combo(Card.d5, Card.h4),
      new Combo(Card.d5, Card.c4)
    );
  public static readonly p44 = new Hand(
      '44p',
      new Combo(Card.s4, Card.c4),
      new Combo(Card.s4, Card.h4),
      new Combo(Card.s4, Card.d4),
      new Combo(Card.c4, Card.h4),
      new Combo(Card.c4, Card.d4),
      new Combo(Card.h4, Card.d4)
    );
  public static readonly s43 = new Hand(
      '43s',
      new Combo(Card.s4, Card.s3),
      new Combo(Card.h4, Card.h3),
      new Combo(Card.c4, Card.c3),
      new Combo(Card.d4, Card.d3)
    );
  public static readonly s42 = new Hand(
      '42s',
      new Combo(Card.s4, Card.s2),
      new Combo(Card.h4, Card.h2),
      new Combo(Card.c4, Card.c2),
      new Combo(Card.d4, Card.d2)
    );
  public static readonly oA3 = new Hand(
      'A3o',
      new Combo(Card.sA, Card.h3),
      new Combo(Card.sA, Card.c3),
      new Combo(Card.sA, Card.d3),
      new Combo(Card.hA, Card.c3),
      new Combo(Card.hA, Card.d3),
      new Combo(Card.hA, Card.s3),
      new Combo(Card.cA, Card.d3),
      new Combo(Card.cA, Card.h3),
      new Combo(Card.cA, Card.s3),
      new Combo(Card.dA, Card.s3),
      new Combo(Card.dA, Card.h3),
      new Combo(Card.dA, Card.c3)
    );
  public static readonly oK3 = new Hand(
      'K3o',
      new Combo(Card.sK, Card.h3),
      new Combo(Card.sK, Card.c3),
      new Combo(Card.sK, Card.d3),
      new Combo(Card.hK, Card.c3),
      new Combo(Card.hK, Card.d3),
      new Combo(Card.hK, Card.s3),
      new Combo(Card.cK, Card.d3),
      new Combo(Card.cK, Card.h3),
      new Combo(Card.cK, Card.s3),
      new Combo(Card.dK, Card.s3),
      new Combo(Card.dK, Card.h3),
      new Combo(Card.dK, Card.c3)
    );
  public static readonly oQ3 = new Hand(
      'Q3o',
      new Combo(Card.sQ, Card.h3),
      new Combo(Card.sQ, Card.c3),
      new Combo(Card.sQ, Card.d3),
      new Combo(Card.hQ, Card.c3),
      new Combo(Card.hQ, Card.d3),
      new Combo(Card.hQ, Card.s3),
      new Combo(Card.cQ, Card.d3),
      new Combo(Card.cQ, Card.h3),
      new Combo(Card.cQ, Card.s3),
      new Combo(Card.dQ, Card.s3),
      new Combo(Card.dQ, Card.h3),
      new Combo(Card.dQ, Card.c3)
    );
  public static readonly oJ3 = new Hand(
      'J3o',
      new Combo(Card.sJ, Card.h3),
      new Combo(Card.sJ, Card.c3),
      new Combo(Card.sJ, Card.d3),
      new Combo(Card.hJ, Card.c3),
      new Combo(Card.hJ, Card.d3),
      new Combo(Card.hJ, Card.s3),
      new Combo(Card.cJ, Card.d3),
      new Combo(Card.cJ, Card.h3),
      new Combo(Card.cJ, Card.s3),
      new Combo(Card.dJ, Card.s3),
      new Combo(Card.dJ, Card.h3),
      new Combo(Card.dJ, Card.c3)
    );
  public static readonly oT3 = new Hand(
      'T3o',
      new Combo(Card.sT, Card.h3),
      new Combo(Card.sT, Card.c3),
      new Combo(Card.sT, Card.d3),
      new Combo(Card.hT, Card.c3),
      new Combo(Card.hT, Card.d3),
      new Combo(Card.hT, Card.s3),
      new Combo(Card.cT, Card.d3),
      new Combo(Card.cT, Card.h3),
      new Combo(Card.cT, Card.s3),
      new Combo(Card.dT, Card.s3),
      new Combo(Card.dT, Card.h3),
      new Combo(Card.dT, Card.c3)
    );
  public static readonly o93 = new Hand(
      '93o',
      new Combo(Card.s9, Card.h3),
      new Combo(Card.s9, Card.c3),
      new Combo(Card.s9, Card.d3),
      new Combo(Card.h9, Card.c3),
      new Combo(Card.h9, Card.d3),
      new Combo(Card.h9, Card.s3),
      new Combo(Card.c9, Card.d3),
      new Combo(Card.c9, Card.h3),
      new Combo(Card.c9, Card.s3),
      new Combo(Card.d9, Card.s3),
      new Combo(Card.d9, Card.h3),
      new Combo(Card.d9, Card.c3)
    );
  public static readonly o83 = new Hand(
      '83o',
      new Combo(Card.s8, Card.h3),
      new Combo(Card.s8, Card.c3),
      new Combo(Card.s8, Card.d3),
      new Combo(Card.h8, Card.c3),
      new Combo(Card.h8, Card.d3),
      new Combo(Card.h8, Card.s3),
      new Combo(Card.c8, Card.d3),
      new Combo(Card.c8, Card.h3),
      new Combo(Card.c8, Card.s3),
      new Combo(Card.d8, Card.s3),
      new Combo(Card.d8, Card.h3),
      new Combo(Card.d8, Card.c3)
    );
  public static readonly o73 = new Hand(
      '73o',
      new Combo(Card.s7, Card.h3),
      new Combo(Card.s7, Card.c3),
      new Combo(Card.s7, Card.d3),
      new Combo(Card.h7, Card.c3),
      new Combo(Card.h7, Card.d3),
      new Combo(Card.h7, Card.s3),
      new Combo(Card.c7, Card.d3),
      new Combo(Card.c7, Card.h3),
      new Combo(Card.c7, Card.s3),
      new Combo(Card.d7, Card.s3),
      new Combo(Card.d7, Card.h3),
      new Combo(Card.d7, Card.c3)
    );
  public static readonly o63 = new Hand(
      '63o',
      new Combo(Card.s6, Card.h3),
      new Combo(Card.s6, Card.c3),
      new Combo(Card.s6, Card.d3),
      new Combo(Card.h6, Card.c3),
      new Combo(Card.h6, Card.d3),
      new Combo(Card.h6, Card.s3),
      new Combo(Card.c6, Card.d3),
      new Combo(Card.c6, Card.h3),
      new Combo(Card.c6, Card.s3),
      new Combo(Card.d6, Card.s3),
      new Combo(Card.d6, Card.h3),
      new Combo(Card.d6, Card.c3)
    );
  public static readonly o53 = new Hand(
      '53o',
      new Combo(Card.s5, Card.h3),
      new Combo(Card.s5, Card.c3),
      new Combo(Card.s5, Card.d3),
      new Combo(Card.h5, Card.c3),
      new Combo(Card.h5, Card.d3),
      new Combo(Card.h5, Card.s3),
      new Combo(Card.c5, Card.d3),
      new Combo(Card.c5, Card.h3),
      new Combo(Card.c5, Card.s3),
      new Combo(Card.d5, Card.s3),
      new Combo(Card.d5, Card.h3),
      new Combo(Card.d5, Card.c3)
    );
  public static readonly o43 = new Hand(
      '43o',
      new Combo(Card.s4, Card.h3),
      new Combo(Card.s4, Card.c3),
      new Combo(Card.s4, Card.d3),
      new Combo(Card.h4, Card.c3),
      new Combo(Card.h4, Card.d3),
      new Combo(Card.h4, Card.s3),
      new Combo(Card.c4, Card.d3),
      new Combo(Card.c4, Card.h3),
      new Combo(Card.c4, Card.s3),
      new Combo(Card.d4, Card.s3),
      new Combo(Card.d4, Card.h3),
      new Combo(Card.d4, Card.c3)
    );
  public static readonly p33 = new Hand(
      '33p',
      new Combo(Card.s3, Card.c3),
      new Combo(Card.s3, Card.h3),
      new Combo(Card.s3, Card.d3),
      new Combo(Card.c3, Card.h3),
      new Combo(Card.c3, Card.d3),
      new Combo(Card.h3, Card.d3)
    );
  public static readonly s32 = new Hand(
      '32s',
      new Combo(Card.s3, Card.s2),
      new Combo(Card.h3, Card.h2),
      new Combo(Card.c3, Card.c2),
      new Combo(Card.d3, Card.d2)
    );

  public static readonly oA2 = new Hand(
      'A2o',
      new Combo(Card.sA, Card.h2),
      new Combo(Card.sA, Card.c2),
      new Combo(Card.sA, Card.d2),
      new Combo(Card.hA, Card.c2),
      new Combo(Card.hA, Card.d2),
      new Combo(Card.hA, Card.s2),
      new Combo(Card.cA, Card.d2),
      new Combo(Card.cA, Card.h2),
      new Combo(Card.cA, Card.s2),
      new Combo(Card.dA, Card.s2),
      new Combo(Card.dA, Card.h2),
      new Combo(Card.dA, Card.c2)
    );
  public static readonly oK2 = new Hand(
      'K2o',
      new Combo(Card.sK, Card.h2),
      new Combo(Card.sK, Card.c2),
      new Combo(Card.sK, Card.d2),
      new Combo(Card.hK, Card.c2),
      new Combo(Card.hK, Card.d2),
      new Combo(Card.hK, Card.s2),
      new Combo(Card.cK, Card.d2),
      new Combo(Card.cK, Card.h2),
      new Combo(Card.cK, Card.s2),
      new Combo(Card.dK, Card.s2),
      new Combo(Card.dK, Card.h2),
      new Combo(Card.dK, Card.c2)
    );

  public static readonly oQ2 = new Hand(
      'Q2o',
      new Combo(Card.sQ, Card.h2),
      new Combo(Card.sQ, Card.c2),
      new Combo(Card.sQ, Card.d2),
      new Combo(Card.hQ, Card.c2),
      new Combo(Card.hQ, Card.d2),
      new Combo(Card.hQ, Card.s2),
      new Combo(Card.cQ, Card.d2),
      new Combo(Card.cQ, Card.h2),
      new Combo(Card.cQ, Card.s2),
      new Combo(Card.dQ, Card.s2),
      new Combo(Card.dQ, Card.h2),
      new Combo(Card.dQ, Card.c2)
    );
  public static readonly oJ2 = new Hand(
      'J2o',
      new Combo(Card.sJ, Card.h2),
      new Combo(Card.sJ, Card.c2),
      new Combo(Card.sJ, Card.d2),
      new Combo(Card.hJ, Card.c2),
      new Combo(Card.hJ, Card.d2),
      new Combo(Card.hJ, Card.s2),
      new Combo(Card.cJ, Card.d2),
      new Combo(Card.cJ, Card.h2),
      new Combo(Card.cJ, Card.s2),
      new Combo(Card.dJ, Card.s2),
      new Combo(Card.dJ, Card.h2),
      new Combo(Card.dJ, Card.c2)
    );
  public static readonly oT2 = new Hand(
      'T2o',
      new Combo(Card.sT, Card.h2),
      new Combo(Card.sT, Card.c2),
      new Combo(Card.sT, Card.d2),
      new Combo(Card.hT, Card.c2),
      new Combo(Card.hT, Card.d2),
      new Combo(Card.hT, Card.s2),
      new Combo(Card.cT, Card.d2),
      new Combo(Card.cT, Card.h2),
      new Combo(Card.cT, Card.s2),
      new Combo(Card.dT, Card.s2),
      new Combo(Card.dT, Card.h2),
      new Combo(Card.dT, Card.c2)
    );
  public static readonly o92 = new Hand(
      '92o',
      new Combo(Card.s9, Card.h2),
      new Combo(Card.s9, Card.c2),
      new Combo(Card.s9, Card.d2),
      new Combo(Card.h9, Card.c2),
      new Combo(Card.h9, Card.d2),
      new Combo(Card.h9, Card.s2),
      new Combo(Card.c9, Card.d2),
      new Combo(Card.c9, Card.h2),
      new Combo(Card.c9, Card.s2),
      new Combo(Card.d9, Card.s2),
      new Combo(Card.d9, Card.h2),
      new Combo(Card.d9, Card.c2)
    );
  public static readonly o82 = new Hand(
      '82o',
      new Combo(Card.s8, Card.h2),
      new Combo(Card.s8, Card.c2),
      new Combo(Card.s8, Card.d2),
      new Combo(Card.h8, Card.c2),
      new Combo(Card.h8, Card.d2),
      new Combo(Card.h8, Card.s2),
      new Combo(Card.c8, Card.d2),
      new Combo(Card.c8, Card.h2),
      new Combo(Card.c8, Card.s2),
      new Combo(Card.d8, Card.s2),
      new Combo(Card.d8, Card.h2),
      new Combo(Card.d8, Card.c2)
    );
  public static readonly o72 = new Hand(
      '72o',
      new Combo(Card.s7, Card.h2),
      new Combo(Card.s7, Card.c2),
      new Combo(Card.s7, Card.d2),
      new Combo(Card.h7, Card.c2),
      new Combo(Card.h7, Card.d2),
      new Combo(Card.h7, Card.s2),
      new Combo(Card.c7, Card.d2),
      new Combo(Card.c7, Card.h2),
      new Combo(Card.c7, Card.s2),
      new Combo(Card.d7, Card.s2),
      new Combo(Card.d7, Card.h2),
      new Combo(Card.d7, Card.c2)
    );


  public static readonly o62 = new Hand(
      '62o',
      new Combo(Card.s6, Card.h2),
      new Combo(Card.s6, Card.c2),
      new Combo(Card.s6, Card.d2),
      new Combo(Card.h6, Card.c2),
      new Combo(Card.h6, Card.d2),
      new Combo(Card.h6, Card.s2),
      new Combo(Card.c6, Card.d2),
      new Combo(Card.c6, Card.h2),
      new Combo(Card.c6, Card.s2),
      new Combo(Card.d6, Card.s2),
      new Combo(Card.d6, Card.h2),
      new Combo(Card.d6, Card.c2)
    );


  public static readonly o52 = new Hand(
      '52o',
      new Combo(Card.s5, Card.h2),
      new Combo(Card.s5, Card.c2),
      new Combo(Card.s5, Card.d2),
      new Combo(Card.h5, Card.c2),
      new Combo(Card.h5, Card.d2),
      new Combo(Card.h5, Card.s2),
      new Combo(Card.c5, Card.d2),
      new Combo(Card.c5, Card.h2),
      new Combo(Card.c5, Card.s2),
      new Combo(Card.d5, Card.s2),
      new Combo(Card.d5, Card.h2),
      new Combo(Card.d5, Card.c2)
    );
  public static readonly o42 = new Hand(
      '42o',
      new Combo(Card.s4, Card.h2),
      new Combo(Card.s4, Card.c2),
      new Combo(Card.s4, Card.d2),
      new Combo(Card.h4, Card.c2),
      new Combo(Card.h4, Card.d2),
      new Combo(Card.h4, Card.s2),
      new Combo(Card.c4, Card.d2),
      new Combo(Card.c4, Card.h2),
      new Combo(Card.c4, Card.s2),
      new Combo(Card.d4, Card.s2),
      new Combo(Card.d4, Card.h2),
      new Combo(Card.d4, Card.c2)
    );

  public static readonly o32 = new Hand(
      '32o',
      new Combo(Card.s3, Card.h2),
      new Combo(Card.s3, Card.c2),
      new Combo(Card.s3, Card.d2),
      new Combo(Card.h3, Card.c2),
      new Combo(Card.h3, Card.d2),
      new Combo(Card.h3, Card.s2),
      new Combo(Card.c3, Card.d2),
      new Combo(Card.c3, Card.h2),
      new Combo(Card.c3, Card.s2),
      new Combo(Card.d3, Card.s2),
      new Combo(Card.d3, Card.h2),
      new Combo(Card.d3, Card.c2)
    );
  public static readonly p22 = new Hand(
      '22p',
      new Combo(Card.s2, Card.c2),
      new Combo(Card.s2, Card.h2),
      new Combo(Card.s2, Card.d2),
      new Combo(Card.c2, Card.h2),
      new Combo(Card.c2, Card.d2),
      new Combo(Card.h2, Card.d2)
    )
}
