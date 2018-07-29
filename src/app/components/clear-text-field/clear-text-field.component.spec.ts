import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTextFieldComponent } from './clear-text-field.component';

describe('ClearTextFieldComponent', () => {
  let component: ClearTextFieldComponent;
  let fixture: ComponentFixture<ClearTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
