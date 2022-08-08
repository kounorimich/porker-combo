import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HandRange} from '../shared/models/HandRange';
import {Folder} from '../shared/models/Folder';

@Component({
  selector: 'app-range-entry',
  templateUrl: './range-entry.component.html',
  styleUrls: ['./range-entry.component.css']
})
export class RangeEntryComponent implements OnInit {
  @Input() range: HandRange
  @Output() rangeSelected: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  rangeClicked() {
    this.rangeSelected.emit(this.range)
  }

}
