import {Hands} from '../hand/Hands';
import {Combo} from './Combo';

export class Combos {
  static all(): Combo[]  {
    return Object.values(Hands).map(x => Array.from(x.combos)).flat();
  }
}
