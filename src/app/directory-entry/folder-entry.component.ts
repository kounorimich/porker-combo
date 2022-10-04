import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DirectoryEntry} from '../shared/models/DirectoryEntry';
import {HandRange} from '../shared/models/HandRange';
import {Folder} from '../shared/models/Folder';

@Component({
  selector: 'app-directory-entry',
  templateUrl: './folder-entry.component.html',
  styleUrls: ['./folder-entry.component.css']
})
export class FolderEntry implements OnInit {

  @Input() folder: Folder
  @Output() rangeSelected: EventEmitter<any> = new EventEmitter<any>()
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  asFolder(e: DirectoryEntry) {
    return e as Folder
  }

  rangeClicked(range: HandRange) {
    this.rangeSelected.emit(range)
  }

  asHandRange(e: DirectoryEntry) {
    return e as HandRange
  }

}
