import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserOptionsComponent } from './guest-user-options.component';

describe('GuestUserOptionsComponent', () => {
  let component: GuestUserOptionsComponent;
  let fixture: ComponentFixture<GuestUserOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestUserOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestUserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
