import { Injectable } from '@angular/core';
import {HandRange} from '../shared/models/HandRange';
import {Defaults} from './defaults';
import {DirectoryEntry} from '../shared/models/DirectoryEntry';

@Injectable({
  providedIn: 'root'
})
export class DirectoryEntryService {

  constructor() { }

  defaults(): DirectoryEntry {
    return Defaults
  }


}
