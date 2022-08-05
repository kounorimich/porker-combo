import {Combo} from '../combo/Combo';
import {Condition} from '../Condition';
import {Hands} from './Hands';

//

export class Hand {
  label: string;
  combos: Set<Combo>;
  constructor(label: string, ...hands: Combo[]) {
    this.label = label;
    this.combos = new Set(hands);
  }
  isSuited(): boolean {
    return this.label.endsWith("s")
  }
  isPocketPair(): boolean {
    return this.label.endsWith("p")
  }

  // 「A♣をもつ」という条件 → AKsは適合するんだけど、全部ではなく25%。のように、UIの表でも、あり/なしだけじゃなく、pioSolverみたいに、コンボ数を反映させたいのでbooleanではなくカウントする
  countMatchedComboCount(condition: Condition): number {
    return Array.from(this.combos).filter(combo => condition.condition(combo)).length
  }

  // TODO 探さなくても、ラベルに対応するハンドはスタティックに決まるから、全部のハンドについて宣言すりゃいい
  static label2Hand(label: string): Hand {
    return Object.values(Hands).find((h) => h.label === label);
  }

}
