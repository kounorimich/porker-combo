import {AllList} from './AllHandComboList';
import {Combo} from './Combo';

export class AllComboList {
  static all(): Combo[]  {
    const unflatten = AllList.AllHands.map(x => x.combos);
    const alllist: Combo[] = [];
    unflatten.map(x => x.forEach(y => alllist.push(y)));
    return alllist;
  }
}
