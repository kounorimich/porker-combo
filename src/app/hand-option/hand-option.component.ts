import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hand} from '../shared/models/hand/Hand';

@Component({
  selector: 'app-hand-option',
  templateUrl: './hand-option.component.html',
  styleUrls: ['./hand-option.component.css']
})
export class HandOptionComponent implements OnInit {

  @Input() hand: Hand
  @Output() remove =  new EventEmitter<any>();
  @Output() add =  new EventEmitter<any>();


  constructor() { }


  ngOnInit(): void {
  }

}
