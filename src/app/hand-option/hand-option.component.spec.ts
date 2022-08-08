import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOptionComponent } from './hand-option.component';

describe('HandOptionComponent', () => {
  let component: HandOptionComponent;
  let fixture: ComponentFixture<HandOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
