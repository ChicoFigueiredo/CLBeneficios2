import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMiniboxComponent } from './admin-minibox.component';

describe('AdminMiniboxComponent', () => {
  let component: AdminMiniboxComponent;
  let fixture: ComponentFixture<AdminMiniboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMiniboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMiniboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
