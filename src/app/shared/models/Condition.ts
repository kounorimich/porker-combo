import {Hands} from './hand/Hands';
import {Combo} from './combo/Combo';
import {Num} from './Num';
import {Suit} from './Suit';




export class Condition {
  condition: (combo: Combo) => boolean;

  constructor(c: (combo: Combo) => boolean) {
    this.condition = c;
  }
}


// export class RangeNarrowing {
//   // 「Aを持っていない」 「ハートのスーテッドである」といったハンドを絞る条件たち
//   narrowingFuncs: ((combos: Set<Combo>) => Set<Combo>)[] = [];
//
//   addFunc(func: ((combos: Set<Combo>) => Set<Combo>)) {
//     this.narrowingFuncs.push(func);
//   }
//
//   narrow(combos: Set<Combo>): Set<Combo> {
//     let nowCombos: Set<Combo> = combos;
//     this.narrowingFuncs.forEach(nf => {
//       nowCombos = nf(nowCombos);
//     });
//     return nowCombos;
//   }
//
//
// }
