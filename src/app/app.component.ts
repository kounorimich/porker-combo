import {Component, OnInit} from '@angular/core';
import {HandRange} from './shared/models/HandRange';
import {DirectoryEntryService} from './service/directory-entry.service';
import {DirectoryEntry} from './shared/models/DirectoryEntry';
import {Folder} from './shared/models/Folder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  range: HandRange = HandRange.Empty;
  entries: DirectoryEntry[] = [];

  constructor(private directoryEntryService: DirectoryEntryService) {
  }

  ngOnInit(): void {
    this.entries.push(this.directoryEntryService.defaults())
  }
  setRange(range: HandRange) {
    console.log("setrageeeeeeeee")
    this.range = range;
  }

  hoge() {
    this.range = HandRange.dummyRange
  }

  asFolder(e: DirectoryEntry) {
    return e as Folder;
  }

  asHandRange(e: DirectoryEntry) {
    return e as HandRange;
  }



}


