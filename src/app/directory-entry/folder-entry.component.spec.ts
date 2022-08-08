import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderEntry } from './folder-entry.component';

describe('DirectoryEntryComponent', () => {
  let component: FolderEntry;
  let fixture: ComponentFixture<FolderEntry>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderEntry ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
