import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admindashboard3Component } from './admin-dashboard3.component';

describe('Admindashboard3Component', () => {
  let component: Admindashboard3Component;
  let fixture: ComponentFixture<Admindashboard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admindashboard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admindashboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
