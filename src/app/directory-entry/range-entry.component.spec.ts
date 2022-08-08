import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeEntryComponent } from './range-entry.component';

describe('RangeEntryComponent', () => {
  let component: RangeEntryComponent;
  let fixture: ComponentFixture<RangeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
