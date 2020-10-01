import {Combo} from './Combo';
import {Card} from './Cards';

export class HandComboModel {
  label: string;
  combos: Combo[];
  constructor(label: string, ...hands: Combo[]) {
    this.label = label;
    this.combos = hands;
  }
}
