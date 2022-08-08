import {HandRange} from './HandRange';
import {DirectoryEntry} from './DirectoryEntry';

export class Folder implements DirectoryEntry {
  readonly isFolder = true;
  name: string
  directoryEntries: DirectoryEntry[]

  constructor(name: string, directoryEntries: DirectoryEntry[]) {
    this.name = name;
    this.directoryEntries = directoryEntries;
  }

  static create(name: string) {
    return new Folder(name, [])
  }

  remove(index: number) {
    this.directoryEntries = this.directoryEntries.splice(index, 1)
  }

  add(entry: DirectoryEntry) {
    this.directoryEntries.push(entry)
  }
}
